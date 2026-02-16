error = {
    message: "Oops! We could not find the resource that you were looking for.",
};

module.exports = (req, res) => {
    res.status(404).render("error", { err: error });
};
