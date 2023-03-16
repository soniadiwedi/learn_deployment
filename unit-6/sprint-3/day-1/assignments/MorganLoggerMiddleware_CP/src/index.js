// import required modules

// export the server

const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const app = express();
const path = require("path");

app.use(express.json());

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(
  morgan(
    ":method :status :res[content-length] - :response-time ms :date[web] :http-version :url ",
    { stream: accessLogStream }
  )
);

app.get("/", (req, res) => {
  res.status(200).send({ message: "welcome to server" });
});

app.get("/get-users", (req, res) => {
  res.status(200).send({ message: "here is the list of all users" });
});
app.post("/add-user", (req, res) => {
  res.status(201).send({ message: "user added successfully" });
});

app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(201).send({ message: `user ${id} updated successfylly` });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send({ message: `user ${id} deleted successfylly` });
});

app.listen(3000, () => {
  console.log("server is running");
});

module.exports = app;

// const logger = morgan(function (tokens, req, res) {
//   fs.writeFileSync(
//     "./src/access.log",
//     `${tokens.method(req, res)} ${tokens.status(req, res)}
//     ${tokens.res(req, res,"content-length")}
//     ${tokens["response-time"](req, res)}
//     ${tokens.date(req, res)}
//     ${tokens["http-version"](req, res)}
//     ${tokens.url(req, res)} \n`
//   );
// });
// app.use(logger);
