const Express = require("express");
const router = Express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

router.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

router.get("/new", (req, res, next) => {
    res.render("form");
});

module.exports = router;
