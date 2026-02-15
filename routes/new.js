const Express = require("express");
const router = Express.Router();

router.get("/", (req, res, next) => {
    res.send("This is new page");
});

module.exports = router;
