const messages = require("../models/messages.model");

function getMessages(req, res) {
  console.log("getMessages", messages);
  res.status(200).json(messages);
}

function getMessage(req, res) {
  const messageId = Number(req.params.messageId);
  const message = messages[messageId];

  if (message) {
    res.json(message);
  } else
    res.status(404).json({
      error: "the message that you search about not exist"
    });
}

function postMessages(req, res) {
  if (!req.body.title) {
    res.status(404).json({
      error: "please insert the title of message that want to add"
    });
  } else if (req.body.title) {
    const newMessage = {
      id: messages.length,
      title: req.body.title,
      subtitle: req.body.subtitle
    };
    messages.push(newMessage);
    res.json(newMessage);
  }
}

module.exports = {
  getMessages,
  getMessage,
  postMessages
};
