'use strict';

var utils = require('../utils/writer.js');
var volunteer = require('../service/volunteerService.js');

module.exports.volunteerGET = async function volunteerGET (req, res, next) {
  await volunteer.volunteerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.volunteerPOST = async function volunteerPOST (req, res, next) {
  await volunteer.volunteerPOST(req.body)
    .then(volunteer.volunteer_idGET)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteer_idDELETE = async function volunteer_idDELETE (req, res, next) {
  await volunteer.volunteer_idDELETE(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteer_idGET = async function volunteer_idGET (req, res, next) {
  await volunteer.volunteer_idGET(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.volunteer_idPUT = async function volunteer_idPUT (req, res, next) {
  await volunteer.volunteer_idPUT(req.body,req.params.id)
  .then(volunteer.volunteer_idGET)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
