'use strict';

const mysql = require('mysql');

//local mysql db connection

const dbConn = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b53b982cfd8e44',
  password : '95bf472f',
  database : 'heroku_efafe70d555ac00'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;