const mongoose = require("mongoose");

const { Schema } = mongoose;

const condidatSchema = new mongoose.Schema({
  userID: {
    type: Schema.Types.ObjectId, // Change type to ObjectId to reference UserSchema's _id
    ref: "users", // Reference the UserSchema
    required: true,
  },

  email: {
    type: String,
   
   
  },

  lettre_de_motivation: { type: String },
  file: { type: String },

  accepted: { type: String, default: "en attente" },
  titrePoste: {
    type: String,
    required: [true, "Titre du poste is required"],
  },

  datePublication: {
    type: Date, // Définissez le type comme Date pour stocker la date et l'heure
    default: Date.now, // Définissez une valeur par défaut pour enregistrer la date actuelle lors de la création
  },
});
const CondidatSchema = mongoose.model("condidats", condidatSchema);

module.exports = CondidatSchema;
