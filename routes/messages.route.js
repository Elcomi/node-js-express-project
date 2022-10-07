const express = require("express");

const messagesController = require("../controllers/messages.controller");

const messagesRoute = express.Router();

messagesRoute.get("/", messagesController.getMessages);
messagesRoute.get("/:messageId", messagesController.getMessage);

messagesRoute.post("/", messagesController.postMessages);

module.exports = messagesRoute;
