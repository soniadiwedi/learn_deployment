const express = require("express");
const app = express();

const valitionData = (req, res, next) => {
    const { id, name, rating, description, genre, cast } = req.body
    if (!id || !name || !rating || !description || !genre || !cast) {
        return res.status(400).send(" Missing fields.");
      }
      if (
        typeof id !== "number" || typeof name !== "string" || typeof rating !== "number" ||  typeof description !== "string" ||  typeof genre !== "string" || !Array.isArray(cast))
        {
        return res.status(400).send(" Invalid data types.");
       }
      next();
    }


    app.post("/movies", valitionData, (req, res) => {
        res.send("Data is valid.");
      });

      app.listen(4400, () => {
        console.log("Server is running on port 4400.");
      });