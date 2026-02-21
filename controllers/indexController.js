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

exports.getHome = (_, res) => {
    res.render("index", { messages: messages });
}

exports.getNew = (_, res) => {
    res.render('form');
}

exports.postNew = (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.author,
        added: new Date(),
    };

    messages.push(newMessage);

    res.redirect("/");
}

exports.getMessage = (req, res) => {
    const message = messages[+req.params.messageIndex];
    res.render("message", { message: message });
}