const express = require("express");
const indexRouter = require("./router/index");
const newRouter = require("./router/new");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const path = require("node:path");

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use(notFound);
app.use(errorHandler);

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(3000, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Server up and running at port 3000");
    }
});
