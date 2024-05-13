module.exports = (app) => {
  const condidatController = require("./condidat.controllers");
  const upload = require("../../middleware/multer");
  const { checkToken } = require("../../middleware/tokenValidation");

  var router = require("express").Router();
  router.post("/create", checkToken, upload, condidatController.createCondidat);
  router.get("/", condidatController.getAllCondidats);

  router.get("/:id", checkToken, condidatController.getCondidatById);
  router.delete("/:id", checkToken, condidatController.deleteCondidatById);
  router.get(
    "/con/acceptedcondidats",
    checkToken,
    condidatController.getAcceptedCondidats
  );
  router.put("/:id/accept", condidatController.acceptCondidat);
  router.put("/:id/refuse", condidatController.refuseCondidat);
  router.get(
    "/poste/:titre",
    checkToken,
    condidatController.getCondidatsByPosteTitle
  );
  router.get(
    "/count/condidat",
    checkToken,
    condidatController.countTotalCondidates
  );
  // Route pour obtenir tous les condidats acceptés par titre de poste
  router.get(
    "/accepted/:titre",
    checkToken,
    condidatController.getAcceptedCondidatsByPosteTitle
  );

  router.get(
    "/nonaccepted/:titre",
    checkToken,
    condidatController.getNonAcceptedCondidatsByPosteTitle
  );
  router.get('/count/accepted', condidatController.countAcceptedCondidates);
router.get('/count/refused', condidatController.countRefusedCondidates);
  app.use("/condidates", router);
};
