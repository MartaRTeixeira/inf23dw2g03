"use strict"

const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "123456",
  database: "doacaodeanimais",
})

connection.connect((err) => {
  if (err) {
    console.log("Database connection failed.")
    throw err
  }

  console.log("Connected to the Database.")
})

module.exports = connection
