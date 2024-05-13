const CondidatSchema = require("../condidates/condidat.models");
const PosteSchema = require("../postes/poste.models");
require("dotenv").config();

// Créer un nouveau condidat
exports.createCondidat = async (req, res, next) => {
  const { userID, titrePoste ,email,lettre_de_motivation} = req.body;
  const { file } = req; // Extract file from request

  try {
    // Vérifier si l'utilisateur a déjà postulé au poste spécifique
    const existingCondidat = await CondidatSchema.findOne({ userID, titrePoste });

    if (existingCondidat) {
      return res.status(400).json({ success: false, error: "Vous avez déjà postulé à ce poste" });
    }

    // Si l'utilisateur n'a pas déjà postulé au poste spécifique, ajouter la candidature
    const newCondidat = new CondidatSchema({
      userID,
      titrePoste,
      email,
      lettre_de_motivation,
      file: (file && file.filename) || null, // Include file in new CondidatSchema instance
    });

    const saved = await newCondidat.save();

    return res.status(201).json({ success: true, information: saved });
  } catch (error) {
    console.error("Erreur lors de l'ajout du candidat:", error);
    return res.status(500).json({ success: false, error: "Erreur lors de l'ajout du candidat" });
  }
};
// Obtenir tous les condidats
exports.getAllCondidats = async (req, res, next) => {
  try {
    const condidats = await CondidatSchema.find().populate(
      "userID",
      "name lastname email"
    );
    return res.send({
      success: true,
      condidats: condidats,
    });
  } catch (e) {
    next(e);
  }
};

// Obtenir un condidat par son ID
exports.getCondidatById = async (req, res, next) => {
  const condidatId = req.params.id;
  try {
    const condidat = await CondidatSchema.findById(condidatId);
    if (!condidat) {
      return res.status(404).send({
        success: false,
        message: "Condidat not found",
      });
    }
    return res.send({
      success: true,
      condidat: condidat,
    });
  } catch (e) {
    next(e);
  }
};

// Supprimer un condidat par son ID
exports.deleteCondidatById = async (req, res, next) => {
  const condidatId = req.params.id;
  try {
    const deletedCondidat = await CondidatSchema.findByIdAndDelete(condidatId);
    if (!deletedCondidat) {
      return res.status(404).send({
        success: false,
        message: "condidat not delete",
      });
    }
    return res.send({
      success: true,
      message: "condidat deleted successfully",
    });
  } catch (e) {
    next(e);
  }
};

// Obtenir tous les condidats acceptés
exports.getAcceptedCondidats = async (req, res, next) => {
  try {
    // Récupérer tous les condidats acceptés depuis la base de données
    const acceptedCondidats = await CondidatSchema.find({ accepted: true });
    res.json(acceptedCondidats);
  } catch (error) {
    console.error("Error fetching accepted condidats:", error);
    res.status(500).json({ error: "Failed to fetch accepted condidats" });
  }
};

// Accepter un condidat par son ID
exports.acceptCondidat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCondidat = await CondidatSchema.findByIdAndUpdate(
      id,
      { accepted: true },
      { new: true }
    );
    res.json(updatedCondidat);
  } catch (error) {
    console.error("Error accepting condidat:", error);
    res.status(500).json({ error: "Failed to accept condidat" });
  }
};
exports.refuseCondidat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCondidat = await CondidatSchema.findByIdAndUpdate(
      id,
      { accepted: false },
      { new: false }
    );
    res.json(updatedCondidat);
  } catch (error) {
    console.error("Error refusé condidat:", error);
    res.status(500).json({ error: "Failed to refuse condidat" });
  }
};
exports.getCondidatsByPosteTitle = async (req, res, next) => {
  const { titre } = req.params;
  try {
    // Recherche des candidats avec le titre de poste spécifique
    const condidats = await CondidatSchema.find({ titrePoste: titre }).select(
      "name email lettre_de_motivation file titrePoste"
    );

    // Si aucun candidat n'est trouvé pour ce titre de poste
    if (condidats.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Aucun candidat trouvé pour le titre de poste spécifié",
      });
    }

    // Si des candidats sont trouvés, renvoyer les informations spécifiques des candidats
    return res.status(200).json({
      success: true,
      condidats: condidats,
    });
  } catch (error) {
    console.error("Error fetching condidats by poste title:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch condidats by poste title" });
  }
};
exports.countTotalCondidates = async (req, res) => {
  try {
    const totalCondidates = await CondidatSchema.countDocuments();
    res.status(200).json({ count: totalCondidates });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Obtenir tous les candidats acceptés par titre de poste
exports.getAcceptedCondidatsByPosteTitle = async (req, res, next) => {
  const { titre } = req.params;
  try {
    // Recherche des candidats acceptés avec le titre de poste spécifique
    const acceptedCondidats = await CondidatSchema.find({
      titrePoste: titre,
      accepted: true,
    }).populate("userID", "name email image");

    // Si aucun candidat accepté n'est trouvé pour ce titre de poste
    if (acceptedCondidats.length === 0) {
      return res.status(404).json({
        success: false,
        message:
          "Aucun candidat accepté trouvé pour le titre de poste spécifié",
      });
    }

    // Si des candidats acceptés sont trouvés, renvoyer les informations spécifiques des candidats
    return res.status(200).json({
      success: true,
      condidats: acceptedCondidats,
    });
  } catch (error) {
    console.error("Error fetching accepted condidats by poste title:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch accepted condidats by poste title" });
  }
};
exports.getNonAcceptedCondidatsByPosteTitle = async (req, res, next) => {
  const { titre } = req.params;
  console.log("Titre de poste:", titre);
  try {
    // Recherche des candidats non acceptés avec le titre de poste spécifique
    const nonAcceptedCondidats = await CondidatSchema.find({
      titrePoste: titre,
      accepted: "en attente",
    }).populate("userID", "name email image"); // Populate the userID field with user information
    console.log("Résultats de la recherche:", nonAcceptedCondidats);

    // Si aucun candidat non accepté n'est trouvé pour ce titre de poste
    if (nonAcceptedCondidats.length === 0) {
      return res.status(404).json({
        success: false,
        
        message:
          "Aucun candidat non accepté trouvé pour le titre de poste spécifié",
      });
    }

    // Envoyer les candidats non acceptés avec les informations utilisateur
    res.status(200).json({
      success: true,
      condidats: nonAcceptedCondidats,
    });
  } catch (error) {
    console.error("Error fetching non accepted condidats by poste:", error);
    res.status(500).json({
      success: false,
      message:
        "Une erreur s'est produite lors de la récupération des candidats non acceptés",
    });
  }
};
exports.countAcceptedCondidates = async (req, res) => {
  try {
    const totalAcceptedCondidates = await CondidatSchema.countDocuments({ accepted: true });
    res.status(200).json({ count: totalAcceptedCondidates });
  } catch (err) {
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};

// Méthode pour obtenir le nombre total de candidats refusés
exports.countRefusedCondidates = async (req, res) => {
  try {
    const totalRefusedCondidates = await CondidatSchema.countDocuments({ accepted: false });
    res.status(200).json({ count: totalRefusedCondidates });
  } catch (err) {
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
};