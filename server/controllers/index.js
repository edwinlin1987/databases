var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');
var rh = require('../request-handler');

var messages = [];
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
      utils.sendResponse(res, 201);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res);
    },
    post: function (req, res) {
      models.users.post(req.body);
      utils.sendResponse(res, 201);
    }
  }
};

