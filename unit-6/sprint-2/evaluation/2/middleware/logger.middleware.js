
// write the logic for logger middleware and export it.

const path = require("path");
const fs = require("fs");
const ps = path.join(__dirname, "../logs.txt");
const logger = (req, res, next) => {
  const data = `Method:${req.method}, Route:${req.url}, user-agent:${req.headers["user-agent"]}\n`;
  fs.appendFileSync(ps, data);
  next();
};

module.exports = logger;
