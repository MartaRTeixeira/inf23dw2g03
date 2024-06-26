'use strict';
var mysql = require("../utils/db.js");


exports.animalGET = function() {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM animal", function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
};

exports.getpersons = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM person WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};

exports.getvolunteers = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM volunteer WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};

exports.getadoption = function(animalId) {
  return new Promise((resolve, reject) => {
    mysql.query("SELECT id FROM adoption WHERE idAnimal = ?", [animalId], (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else if (res.length === 0) {
        reject(new Error(`Animal with ID ${animalId} does not have an associated adoption.`));
      } else {
        const adoptionId = res[0].id;

        mysql.query("SELECT * FROM adoption WHERE id = ?", [adoptionId], (err, res) => {
          if (err) {
            console.log(err);
            reject(err);
          } else if (res.length === 0) {
            reject(new Error(`Adoption with ID ${adoptionId} not found.`));
          } else {
            resolve(res[0]);
          }
        });
      }
    });
  });
};

exports.animalPOST = function(body) {
  return new Promise(function(resolve, reject) {
    mysql.query("INSERT INTO animal (name, age, typeAnimal, breed, description) VALUES (?,?,?,?,?)", [body.name, body.age, body.typeAnimal, body.breed, body.description], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
};

exports.animal_idDELETE = function(id) {
  return new Promise((resolve, reject) => {
    mysql.beginTransaction((err) => {
      if (err) {
        console.log(err);
        return reject(err);
      }

      mysql.query("DELETE FROM person WHERE id = ?", [id], (err, res) => {
        if (err) {
          return mysql.rollback(() => {
            console.log(err);
            reject(err);
          });
        }

        mysql.query("DELETE FROM volunteer WHERE id = ?", [id], (err, res) => {
          if (err) {
            return mysql.rollback(() => {
              console.log(err);
              reject(err);
            });
          }

          mysql.query("DELETE FROM animal WHERE id = ?", [id], (err, res) => {
            if (err || !res.affectedRows) {
              return mysql.rollback(() => {
                console.log(err);
                console.log(res);
                reject();
              });
            }

            mysql.commit((err) => {
              if (err) {
                return mysql.rollback(() => {
                  console.log(err);
                  reject(err);
                });
              }

              console.log(res);
              resolve({"deleted": id});
            });
          });
        });
      });
    });
  });
};

exports.animal_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM animal WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};

exports.animal_idPUT = function(body, id) {
  return new Promise(function(resolve, reject) {
    mysql.query("UPDATE animal SET name = COALESCE(?, name), age = COALESCE(?, age), typeAnimal = COALESCE(?, typeAnimal), breed = COALESCE(?, breed), description = COALESCE(?, description) WHERE id = ?", [body.name, body.age, body.typeAnimal, body.breed, body.description, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(id);
      }
    });
  });
};
