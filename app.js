const Express = require("express");
const indexRouter = require("./router/index");
const newRouter = require("./router/new");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = Express();

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(3000, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Server up and running at port 3000");
    }
});
