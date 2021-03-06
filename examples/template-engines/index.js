const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey!", message: "Hello there!" });
});

app.get("/error", function (req, res, next) {
  Promise.resolve()
    .then(function () {
      throw new Error("BROKEN");
    })
    .catch(next); // Errors will be passed to Express.
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
