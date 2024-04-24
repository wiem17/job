const UserSchema = require("../users/user.models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const data = { ...req.body, role: req.body.role || "CONDIDAT" };

  try {
    // Vérification si l'e-mail existe déjà
    const existingUser = await UserSchema.findOne({ email: data.email });
    if (existingUser) {
      return res.status(400).json({ error: "Cet e-mail est déjà utilisé." });
    }

    const newUser = new UserSchema(data);
    const salt = bcrypt.genSaltSync(10);
    const cryptedPass = bcrypt.hashSync(data.password, salt);
    newUser.password = cryptedPass;

    await newUser.save();

    const { password, ...payload } = newUser.toObject();

    const token = sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.status(201).send({ mytoken: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'enregistrement de l'utilisateur." });
  }
};

exports.login = async (req, res) => {
  const data = req.body;
  const user = await UserSchema.findOne({ email: data.email });
  if (!user) {
    res.status(404).send("email or password invalid !");
  } else {
    const validPass = bcrypt.compareSync(data.password, user.password);
    if (!validPass) {
      res.status(401).send("email or password invalid !");
    } else {
      const { password, ...payload } = user.toObject();

      const token = sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });

      res.status(200).send({ mytoken: token });
    }
  }
};
