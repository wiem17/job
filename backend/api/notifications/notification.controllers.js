const UserSchema = require("../users/user.models");
const Notification = require('../notifications/notification.models');
const CondidatSchema = require('../condidates/condidat.models');
exports.ajouterNotification = async (req, res, next) => {
  const { message, type } = req.body;
  try {
    // Créer une nouvelle notification
    const newNotification = new Notification({
      message,
      type,
      read: false, // Par défaut, la notification est marquée comme non lue
    });

    // Sauvegarder la notification
    const savedNotification = await newNotification.save();

    // Trouver l'utilisateur admin
  //  const adminUser = await UserSchema.findOne({ role: 'ADMIN' });

    // Ajouter la notification à l'utilisateur admin
   // adminUser.notifications.push(savedNotification._id);
   // await adminUser.save();

    return res.status(201).json({ success: true, notification: savedNotification });
  } catch (error) {
    console.error("Erreur lors de l'ajout de la notification:", error);
    return res.status(500).json({ success: false, error: "Erreur lors de l'ajout de la notification" });
  }
};

exports.markAllNotificationsAsRead = async (req, res, next) => {
  try {
    // Mettre à jour toutes les notifications non lues
    await Notification.updateMany({ read: false }, { read: true });

    // Récupérer toutes les notifications mises à jour
    const notifications = await Notification.find().sort('-createdAt');

    res.status(200).json({
      message: 'All notifications marked as read',
      data: notifications
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour des notifications:", error);
    res.status(500).json({ error: "Erreur lors de la mise à jour des notifications" });
  }
};

  exports.getUnreadNotifications = async (req, res, next) => {
    try {
        // Récupérez toutes les notifications non lues
        const notifications = await Notification.find({ read: false }).sort('-createdAt');
        
        if (!notifications || notifications.length === 0) {
            return res.status(200).json({
                data: [],
            });
        }
        
       

        res.status(200).json({
            data: notifications
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des notifications non lues:", error);
        res.status(500).json({ error: "Erreur lors de la récupération des notifications non lues" });
    }
};
