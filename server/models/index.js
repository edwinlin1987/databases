var db = require('../db');
var utils = require('../utils');


module.exports = {
  messages: {
    get: function (res) {
      db.query('SELECT * FROM messages', function (err, data, fields) {
        if (err) {
          console.log('failed');
        }
        else {
          console.log(data);
          utils.sendResponse(res, data, 200);
        }
      });
    },

     // a function which produces all the messages
    post: function (message) {
      db.query('INSERT INTO messages (username, message) values ("'+ message.username + '","' + message.text +'")',
      //db.query('INSERT INTO messages (username, me) values ("'+ message.username +'")',
      function (err, success, fields) {
        if (err) {
          console.log('failed');
        }
        else {
          console.log('success');
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res) {
      db.query('SELECT * FROM users', function (err, data, fields) {
        if (err) {
          console.log('failed');
        }
        else {
          //console.log(data);
          utils.sendResponse(res, data, 200);
        }
      });
    },
    post: function (message) {

      db.query('INSERT INTO users (username) values (' + message.username + ')', function (err, success, fields) {
        if (err) {
          console.log('failed');
        }
        else {
          console.log('success');
        }
      });

    }
  }
};

