const Express = require("express");
const router = Express.Router();

router.get("/", (req, res) => {
    res.send("Hello world");
});

module.exports = router;
