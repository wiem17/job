const UserSchema = require("../users/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { sign } = require("jsonwebtoken");


require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "brahmiwiem359@gmail.com",
    pass: "mthi idte yqdt tpcn",
  },
});
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
    res
      .status(500)
      .json({ error: "Erreur lors de l'enregistrement de l'utilisateur." });
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

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find user by email
    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    // Generate a unique reset token
    const resetToken = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    // Update user's reset token and expiration time
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const mailOptions = {
      from: "brahmiwiem359@gmail.com",
      to: email,
      subject: "Réinitialisation du mot de passe",

      html: `
      <p>Bonjour ${user.name},</p>
      <p>Vous avez demandé une réinitialisation de mot de passe.</p>
      <p>Cliquez sur le lien suivant pour réinitialiser votre mot de passe :</p>
      <a href="http://localhost:3001/api/reset-password/${resetToken}">Réinitialiser le mot de passe</a>
      <p>Ce lien expirera dans 1 heure.</p>
    
    
      `,
    };

    await transporter.sendMail(mailOptions);
    res.send({ msg: "Email de réinitialisation du mot de passe envoyé" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

exports.resetPassword =  async (req, res) => {
  try {
    const { token } = req.params;
   

    // Find user by reset token and ensure it hasn't expired
    const user = await UserSchema.findOne({
      resetPasswordToken: token,
    });

    // If user not found or token expired
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

   
   res.render("index", { email: user.email, status: "verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.resetPassword =  async (req, res) => {
  try {
    const  {token } = req.params;
    
    const password  = req.body.password;
 console.log( "token",token)
 console.log("password",password)
    // Find user by reset token and ensure it hasn't expired
    const user = await UserSchema.findOne({
      resetPasswordToken: token,
    });
console.log(user)
    // If user not found or token expired
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    if(password){
    console.log(password)
      const salt = 10;
      const genSalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(password, genSalt);
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
     user.resetPasswordExpires = undefined;
      await user.save();
      res.render("index", {  status: "verified" });
    }
    else{
      res.render("index", {  status: "verified" });
    }

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
