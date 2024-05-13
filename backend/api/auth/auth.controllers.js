const UserSchema = require("../users/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { sign } = require("jsonwebtoken");
const User = require("../../models/user");

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
//  exports.forgotPassword = async (req, res) => {
//   try {
//       const { email } = req.body;
//       const user = await UserSchema.findOne({ email });

//       if (!user) {
//           return res.status(404).json({ message: "Utilisateur non trouvé." });
//       }

//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//       const transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//               user: "brahmiwiem359@gmail.com",
//               pass: "mthi idte yqdt tpcn"
//           }
//       });

//       const mailOptions = {
//           from: "brahmiwiem359@gmail.com",
//           to: email,
//           subject: 'Réinitialisation de mot de passe',
//           html: `
//               <p>Bonjour ${user.name},</p>
//               <p>Vous avez demandé une réinitialisation de mot de passe.</p>
//               <p>Cliquez sur le lien suivant pour réinitialiser votre mot de passe :</p>
//               <a href="${process.env.CLIENT_URL}/${user._id}/${token}">Réinitialiser le mot de passe</a>
//               <p>Ce lien expirera dans 1 heure.</p>
//           `
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//               console.log(error);
//               return res.status(500).json({ message: "Erreur lors de l'envoi de l'e-mail." });
//           } else {
//               console.log('E-mail envoyé : ' + info.response);
//               return res.status(200).json({ message: "E-mail envoyé avec succès." });
//           }
//       });
//   } catch (error) {
//       console.error("Erreur lors de la réinitialisation de mot de passe :", error);
//       res.status(500).json({ message: "Erreur lors de la réinitialisation de mot de passe." });
//   }
// };

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
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

    // Send email to the user with the reset link containing the token
    const resetUrl = "http://localhost:3001/api/reset-password/${resetToken}";
         // <a href="http://localhost:3001/user/reset-password/${resetToken}">Réinitialiser le mot de passe</a>

    const mailOptions = {
      from: "brahmiwiem359@gmail.com",
      to: email,
      subject: "Reset Password",

      html: `
      <div   width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
       color:black
      >
    
      <div
      style="
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        
      "
  
    </div>
    <a href="http://localhost:3001/user/reset-password/${resetToken}">Réinitialiser le mot de passe</a>
      <h3 style="width:100%;text-align:center;color: black">You requested for password reset</h3>
      
<h4 style="width:100%;text-align:center;color: black">Click on this <a style=""text-decoration: none; color: black" href="${resetUrl}"
><button
  style="
    width: 100px;
    height: 40px;
    margin: 0 10px;
    color: white;
    border-radius: 30px;
    border: none;
    background-color: #0175CD;
  "
>
<a href="http://localhost:3001/user/reset-password/${resetToken}">Réinitialiser le mot de passe</a>

  Link
</button></a> to reset password.</h4>
    
    </div>
    
    
    
      `,
    };

    await transporter.sendMail(mailOptions);
    res.send({ msg: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

exports.resetPassword =  async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Find user by reset token and ensure it hasn't expired
    const user = await User.findOne({
      resetPasswordToken: token,
    });

    // If user not found or token expired
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Reset password
   // const salt = 10;
    //const genSalt = await bcrypt.genSalt(salt);
   // const hashedPassword = await bcrypt.hash(password, genSalt);
    //user.password = hashedPassword;
    //user.resetPasswordToken = undefined;
  //  user.resetPasswordExpires = undefined;
   // await user.save();
    

   res.render("index", { email: user.email, status: "verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.resetPassword =  async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Find user by reset token and ensure it hasn't expired
    const user = await User.findOne({
      resetPasswordToken: token,
    });

    // If user not found or token expired
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Reset password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
   user.resetPasswordExpires = undefined;
    await user.save();
    

   res.render("index", { email: user.email, status: "verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
