'use strict';
var mysql = require("../utils/db.js")

exports.animal_idadoptionGET = function(id) {
  return new Promise((resolve, reject) => {
    mysql.query(`
      SELECT a.*, ad.*
      FROM animal a
      JOIN adoption ad ON a.id = ad.idAnimal
      WHERE a.id = ?
    `, [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}

exports.adoptionGET = function() {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM adoption", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}

exports.adoptionPOST = function(body) {
  return new Promise((resolve, reject) => {
    console.log(body);
    mysql.query(`
      INSERT INTO adoption (idAnimal, name, address, idPerson, idVolunteer, description)
      VALUES (?, ?, ?, ?, ?, ?)
    `, 
    [body.idAnimal, body.name, body.address, body.idPerson, body.idVolunteer, body.description], 
    function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve({ id: res.insertId });
      }
    });
  });
}

exports.adoption_idDELETE = function(id) {
  return new Promise((resolve, reject) => {
    mysql.query("DELETE FROM adoption WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        reject(new Error('Failed to delete'));
      } else {
        console.log(res);
        resolve({ deleted: id });
      }
    });
  });
}

exports.adoption_idGET = function(id) {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT * FROM adoption WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}

exports.adoption_idPUT = function(body, id) {
  return new Promise((resolve, reject) => {
    console.log(body);
    mysql.query(`
      UPDATE adoption
      SET idAnimal = COALESCE(?, idAnimal),
          name = COALESCE(?, name),
          address = COALESCE(?, address),
          idPerson = COALESCE(?, idPerson),
          idVolunteer = COALESCE(?, idVolunteer),
          description = COALESCE(?, description)
      WHERE id = ?
    `, 
    [body.idAnimal, body.name, body.address, body.idPerson, body.idVolunteer, body.description, id], 
    function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve({ updated: id });
      }
    });
  });
}
