const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

require("./database/index");

server.listen(3333, () => {
  console.log("Server ON ;)");
});
