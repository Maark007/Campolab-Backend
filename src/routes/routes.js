const express = require("express");
const ProducerController = require("../controller/ProducerController");
const FarmController = require("../controller/FarmController");

const routes = express.Router();

routes.get("/producer", ProducerController.index);
routes.post("/producer", ProducerController.store);
routes.patch("/producer/:id", ProducerController.update);
routes.delete("/producer/:id", ProducerController.delete);

routes.post("/producer/:id_producer/farm", FarmController.store);
routes.get("/producer/:id_producer/farm", FarmController.index);
routes.get("/farm/showall", FarmController.showAll);

module.exports = routes;
