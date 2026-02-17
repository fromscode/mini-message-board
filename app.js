const express = require("express");
const router = require("./router/index");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const path = require("node:path");

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use(notFound);
app.use(errorHandler);

app.set("views", "./views");
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Server up and running at port ${PORT}`);
    }
});
