const fs = require("fs");

const path = require("path");
const resTextFile = path.join(__dirname, "../../res.txt");
// make the validator function and export it.
const validatorfunction = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    fs.appendFileSync("res.txt", "bad request.some data is incorrect.");
    res.status(400).send("invalid request body.");
  }
  if (typeof ID === "number") {
          fs.appendFileSync("res.txt", "ID is a number\n");
        }
  if (typeof Name == "string") {
    fs.appendFileSync("res.txt", "Name is a string\n");
  }
  if (typeof Description == "string") {
    fs.appendFileSync("res.txt", "Description is a string\n");
  }
  if (typeof Genre == "string") {
    fs.appendFileSync("res.txt", "Genre is a string\n");
  }
  if (typeof Rating === "number") {
    fs.appendFileSync("res.txt", "Rating is a number\n");
  }
  if (Cast.every((cast) => typeof cast === "string")) {
    fs.appendFileSync("res.txt", "Cast is a array of string\n");
  }

  if (
    typeof ID !=="number" ||
    typeof Name != "string" ||
    /\d/.test(Name) ||
    typeof Description != "string" ||
    typeof Genre != "string" ||
    typeof Rating !== "number" ||
    !Cast.every((cast) => typeof cast == "string")
  ) {
    fs.appendFileSync("res.txt", "bad request.some data is incorrect.\n");
    res.status(400).send("bad request.some data is incorrect.");
  }

  next()
};
module.exports = validatorfunction;
