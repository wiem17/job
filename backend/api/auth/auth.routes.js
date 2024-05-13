module.exports = (app) => {
  const userController = require("./auth.controllers");
  var router = require("express").Router();
  const upload = require("../../middleware/Multer");

  //= ===============================
  // Public routes
  //myMulter.uploadImg.single("image")
  //= ===============================
  //TODO add to swagger
  router.post("/register", upload, userController.register);

  router.post("/login", userController.login);
  router.post('/forgot-password', userController.forgotPassword);
  router.get('/reset-password/:token', userController.resetPassword);
  router.post('/reset-password/:token', userController.resetPassword);
  app.use("/", router);
};
