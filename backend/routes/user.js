const express = require("express");
const router=express.Router();
const User = require("../models/user");

const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
const nodemailer = require("nodemailer");

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
router.post("/forgot-passwordd", async (req, res) => {
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

    const mailOptions = {
      from: "brahmiwiem359@gmail.com",
      to: email,
      subject: "Reset Password",

      html: `
      <p>Bonjour ${user.name},</p>
                    <p>Vous avez demandé une réinitialisation de mot de passe.</p>
                    <p>Cliquez sur le lien suivant pour réinitialiser votre mot de passe :</p>
                    <a href="http://localhost:3001/user/reset-password/${resetToken}">Réinitialiser le mot de passe</a>
                    <p>Ce lien expirera dans 1 heure.</p>
>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.send({ msg: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal server error" });
  }
});

router.get("/reset-password/:token", async (req, res) => {
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
});

router.post("/reset-password/:token", async (req, res) => {
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
});

router.post('/register', async (req, res) => {
  const data = req.body;

  try {
    // Vérification si l'e-mail existe déjà
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
      return res.status(400).json({ error: 'Cet e-mail est déjà utilisé.' });
    }

    // Si l'e-mail n'existe pas, procédez à l'enregistrement de l'utilisateur
    const newUser = new User(data);
    const salt = bcrypt.genSaltSync(10);
    const cryptedPass = await bcrypt.hashSync(data.password, salt);
    newUser.password = cryptedPass;
                                                                                                         
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
  }
});
  router.post('/login' , async (req,res)=>{
    data=req.body;
    user=await User.findOne({email:data.email})
    if(!user){
         res.status(404).send('email or password invalid !')
    }else{
        validPass=bcrypt.compareSync(data.password, user.password)
        if(!validPass){
            res.status(401).send('email or password invalid !')
        }
        else{
            payload={
                _id:user._id,
                email:user.email,
                name:user.name
            }
           token=jwt.sign( payload , 'securepassword')
           res.status(200).send({mytoken: token})
        }
    }


  })
  
  router.get("/getall", async (req, res) => {
    User.find()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });
    
});
  router.get("/getbyid/:id", (req, res) => {
    myid = req.params.id;
    User.findOne({ _id: myid })
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  router.put("/update/:id", (req, res) => {
    id = req.params.id;
    newData = req.body;
    User.findByIdAndUpdate({ _id: id }, newData)
      .then((updated) => {
        res.send(updated);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  router.delete("/delete/:id", (req, res) => {
    id = req.params.id;
    User.findOneAndDelete({ _id: id })
      .then((deletedUser) => {
        res.send(deletedUser);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  
module.exports=router;