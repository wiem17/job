module.exports = (app) => {
    const notificationController = require("./notification.controllers");
    var router = require("express").Router();
    const myMulter = require("../../middleware/Multer");
    const { checkToken } = require("../../middleware/tokenValidation");
  
    //= ===============================
    // Public routes
  
    //= ===============================
    //TODO add to swagger
    router.post('/ajouter-notification', notificationController.ajouterNotification);
    router.patch('/put/not', notificationController.markAllNotificationsAsRead);
    router.get('/unread', notificationController.getUnreadNotifications);
    app.use("/notifications", router);
  };
  