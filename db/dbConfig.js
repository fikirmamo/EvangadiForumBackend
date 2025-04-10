const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "82.197.82.18",
  user: "u940491574_fikirmamo",
  password: process.env.DB_PASSWORD,
  database: "u940491574_EvangadiForum",
});

module.exports = db.promise();
