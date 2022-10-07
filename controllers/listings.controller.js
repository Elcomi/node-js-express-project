const listings = require("../models/listings.model");

function getListings(req, res) {
  console.log("getListings", listings);
  res.status(200).json(listings);
}

function getList(req, res) {
  const listId = Number(req.params.listId);
  const List = listings[listId];

  if (List) {
    res.json(List);
  } else
    res.status(404).json({
      error: "the list that you search about not exist"
    });
}

function postList(req, res) {
  if (!req.body.title) {
    res.status(404).json({
      error: "please add the title of list that you try to add"
    });
  } else if (req.body.title) {
    const newList = {
      id: listings.length,
      title: req.body.title,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description
    };
    listings.push(newList);
    res.json(newList);
  }
}

module.exports = {
  getListings,
  getList,
  postList
};
