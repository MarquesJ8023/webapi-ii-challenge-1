const express = require("express");
const server = express();
const router = require("./router");

server.use(expressjson());
server.use("/api/posts", router);

server.get("/", (req, res) => {
    res.send("One ring to rule them all");
});

module.exports = server;