const UserSchema = require("../users/user.models");
const CondidatSchema = require("../condidates/condidat.models");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();

exports.getAllUsers = async (req, res) => {
  UserSchema.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.getUserCondidats = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    // Find all condidats associated with the provided user ID
    const condidats = await CondidatSchema.find({ userID: id });

    // If no condidats are found for the provided user ID
    if (condidats.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Aucun condidat trouvé pour l'ID utilisateur spécifié",
      });
    }

    // Return the condidats associated with the user ID
    res.status(200).json({
      success: true,
      condidats: condidats,
    });
  } catch (error) {
    console.error("Error fetching condidats by user ID:", error);
    res.status(500).json({
      success: false,
      message:
        "Une erreur s'est produite lors de la récupération des condidats",
    });
  }
};
exports.getUserById = (req, res) => {
  myid = req.params.id;
  UserSchema.findOne({ _id: myid })
    .then((user) => {
      res.send({
        socialProfiles: user.socialProfiles,
        _id: user._id,
        name: user.name,
        lastname: user.lastname,
        age: user.age,
        role: user.role,
        email: user.email,
        image: user.image,
        phoneNumber: user.phoneNumber,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        __v: user.__v
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateUserById = async (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  try {
    

    // Mise à jour de l'utilisateur
    const updatedUser = await UserSchema.findByIdAndUpdate(id, newData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "Utilisateur non trouvé." });
    }

    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de l'utilisateur." });
  }
};

exports.deleteUserById = (req, res) => {
  id = req.params.id;
  UserSchema.findOneAndDelete({ _id: id })
    .then((deletedUser) => {
      res.send(deletedUser);
    })
    .catch((err) => {
      res.send(err);
    });
};


exports.updateUserImageById = async (req, res) => {
  const id = req.user._id;
  const file = req.file; // This will contain the image file saved by multer

  if (!file) {
    return res.status(400).json({ error: "No image provided." });
  }

  try {
    // Update user image path in the database
    const updatedUser = await UserSchema.findByIdAndUpdate(
      id,
      { image: file.path },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user image." });
  }
};
exports.deleteUserAndCondidatById = async (req, res) => {
  const id = req.params.id;

  try {
    // Supprimer le candidat associé à l'utilisateur
    await CondidatSchema.findOneAndDelete({ userID: id });

    // Supprimer l'utilisateur lui-même
    const deletedUser = await UserSchema.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "Utilisateur non trouvé." });
    }

    res.json({ message: "Utilisateur et candidat associé supprimés avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur et du candidat associé." });
  }
};
exports.updateNotificationMessage = async (req, res) => {
  try 
  {
    const { role } = req.params;
    const { message, read } = req.body;
    const notificationId = uuidv4();

    // Trouver l'utilisateur en fonction du rôle
    const user = await UserSchema.findOneAndUpdate(
      { role: role }, // Rechercher l'utilisateur par son rôle
      { 
        $set: { 
          "notifications.0.notificationId": notificationId,
          "notifications.0.message": message,
          "notifications.0.read": read // Mettre à jour le champ read dans le tableau notifications à l'index 0
        } 
      }, 
      { new: true }
    );

    // Vérifier si l'utilisateur existe
    if (!user) {
      return res.status(404).json({ error: `Aucun utilisateur avec le rôle ${role} trouvé` });
    }

    res.json(user);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la notification :", error);
    res.status(500).json({ error: "Erreur lors de la mise à jour de la notification" });
  }
};

exports.getAllUsersadmin = async (req, res) => {
  try {
    // Trouver tous les utilisateurs avec le rôle "admin"
    const users = await UserSchema.find({ role: 'ADMIN' });

    res.send(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
};
