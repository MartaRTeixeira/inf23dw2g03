'use strict';
var mysql = require("../utils/db.js")


exports.personGET = function() {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM person", function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}


exports.personPOST = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("INSERT INTO person (name, phoneNumber, address) VALUES (?, ?, ?)", [body.name, body.phoneNumber, body.address], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      } else {
        console.log(res.insertId);
        resolve (res.insertId);
      }
    });
  });
}


exports.person_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("DELETE FROM person WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        console.log (res);
        reject();
      }
      else {
        console.log (res);
        resolve ({"deleted": id});
      }
    });
  });
}


exports.person_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM person WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


exports.person_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("UPDATE person SET name = COALESCE(?, name), phoneNumber = COALESCE(?, phoneNumber), address = COALESCE(?, address) WHERE id = ?", [body.name, body.phoneNumber, body.address, id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    });
  });
}


exports.person_idanimalGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM person WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}
