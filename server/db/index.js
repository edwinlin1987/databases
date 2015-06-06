var _mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = _mysql.createConnection({
  // host: 'localhost',
  // port: 3000,
  user: 'root',
  database: 'chat',
  // password: ''
});
module.exports.connect();




