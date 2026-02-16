const Express = require("express");
const router = Express.Router();

router.get("/", (req, res, next) => {
    res.render("new");
});

module.exports = router;
