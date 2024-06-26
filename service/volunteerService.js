'use strict';
var mysql = require("../utils/db.js")


exports.volunteerGET = function(){
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM volunteer", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
};


exports.volunteerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("INSERT INTO volunteer (name, phoneNumber, address) VALUES (?, ?, ?)", 
      [body.name, body.phoneNumber, body.address], 
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.insertId);
          resolve(res.insertId);
        }
      }
    );
  });
};


exports.volunteer_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("DELETE FROM volunteer WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted": id});
      }
    });
  });
};


exports.volunteer_idanimalGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM volunteer WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
};


exports.volunteer_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM volunteer WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};


exports.volunteer_idPUT = function(body, id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("UPDATE volunteer SET name = COALESCE(?, name), phoneNumber = COALESCE(?, phoneNumber), address = COALESCE(?, address) WHERE id = ?", 
      [body.name, body.phoneNumber, body.address, id], 
      function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          console.log(res);
          resolve(id);
        }
      }
    );
  });
};
