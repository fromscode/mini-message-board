const e = require('express');
const { body, validationResult, matchedData } = require('express-validator')

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

const notEmptyMessage = 'cannot be empty';
const maxLenMessage = ' cannot exceed 200 characters'

exports.postNew = [
    body('author')
        .trim()
        .escape()
        .notEmpty().withMessage(`Author name ${notEmptyMessage}`),
    body('message').trim().escape()
        .notEmpty().withMessage(`Message content ${notEmptyMessage}`)
        .isLength({
            max: 200
        }).withMessage(`Message content ${maxLenMessage}`),
    (req, res) => {

        const { errors } = validationResult(req);
        if (errors.length) {
            console.log(errors);
            res.status(400).render('form', { errors: errors })
            return;
        }

        const { author, message } = matchedData(req);

        const newMessage = {
            text: message,
            user: author,
            added: new Date(),
        };

        messages.push(newMessage);

        res.redirect("/");
    }]

exports.getMessage = (req, res) => {
    const message = messages[+req.params.messageIndex];
    res.render("message", { message: message });
}