const express = require("express");

const listingsController = require("../controllers/listings.controller");

const listingsRoute = express.Router();

listingsRoute.get("/", listingsController.getListings);
listingsRoute.get("/:listId", listingsController.getList);
listingsRoute.post("/", listingsController.postList);

module.exports = listingsRoute;
