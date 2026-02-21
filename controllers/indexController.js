const e = require('express');
const { body, validationResult, matchedData } = require('express-validator')
const db = require('../db/queries')

exports.getHome = async (_, res) => {
    const messages = await db.getMessages();
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
    async (req, res) => {

        const { errors } = validationResult(req);
        if (errors.length) {
            res.status(400).render('form', { errors: errors })
            return;
        }

        const { author, message } = matchedData(req);

        await db.addMessage(author, message);
        res.redirect("/");
    }]

exports.getMessage = async (req, res) => {
    const id = +req.params.messageIndex;
    const messages = await db.getMessage(id + 1);
    if (messages.length) {
        res.render("message", { message: messages[0] });
        return;
    }

    res.status(404).render("error", {
        err: {
            message: "Oops! We could not find the resource that you were looking for."
        }
    });
}