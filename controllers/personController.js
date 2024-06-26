'use strict';

var utils = require('../utils/writer.js');
var person = require('../service/personService.js');

module.exports.person_get = async function person_get (req, res, next) {
  person.personGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.personPOST = async function personPOST (req, res, next) {
  await person.personPOST(req.body)
    .then(person.person_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.person_idGET = async function person_idGET (req, res, next) {
  await person.person_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.person_idPUT = async function person_idPUT (req, res, next) {
  await person.person_idPUT(req.body, req.params.id)
    .then(person.person_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.person_idDELETE = async function person_idDELETE (req, res, next) {
  await person.person_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};