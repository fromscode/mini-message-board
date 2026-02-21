const Express = require("express");
const router = Express.Router();
const controller = require('../controllers/indexController')

router.get("/", controller.getHome);

router.get("/new", controller.getNew);

router.post("/new", controller.postNew);

router.get("/message:messageIndex", controller.getMessage);

module.exports = router;
