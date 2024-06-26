'use strict';

var utils = require('../utils/writer.js');
var animal = require('../service/animalService.js');

module.exports.animalGET = async function animalGET (req, res, next) {
  animal.animalGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getpersons = async function getpersons (req, res, next) {
  await animal.getpersons(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getvolunteers = async function getvolunteers (req, res, next) {
  await animal.getvolunteers(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.getadoption = async function getadoption (req, res, next) {
  await animal.getadoption(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.animalPOST = async function animalPOST (req, res, next) {
  await animal.animalPOST(req.body)
    .then(animal.animal_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.animal_idDELETE = async function animal_idDELETE (req, res, next) {
  await animal.animal_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.animal_idGET = async function animal_idGET (req, res, next) {
  await animal.animal_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.animal_idPUT = async function animal_idPUT (req, res, next) {
  await animal.animal_idPUT(req.body,req.params.id)
    .then(animal.animal_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
