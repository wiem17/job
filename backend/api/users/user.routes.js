module.exports = (app) => {
  const userController = require("./user.controllers");
  var router = require("express").Router();
  const myMulter = require("../../middleware/Multer");
  const { checkToken } = require("../../middleware/tokenValidation");

  //= ===============================
  // Public routes

  //= ===============================
  //TODO add to swagger
  router.get("/", checkToken, userController.getAllUsers);
  router.get("/:id", checkToken, userController.getUserById);
  router.put("/:id", checkToken, userController.updateUserById);
  router.delete("/:id", checkToken, userController.deleteUserById);
  router.get("/my-condidats/:id", checkToken, userController.getUserCondidats);
  router.patch("/update-image", checkToken, myMulter, userController.updateUserImageById);
  router.delete('/user/:id', userController.deleteUserAndCondidatById);
  router.put('/notifications/:role', userController.updateNotificationMessage);
  router.get('/admin/user', userController.getAllUsersadmin);
  app.use("/users", router);
};
