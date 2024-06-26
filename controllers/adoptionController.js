'use strict';

var utils = require('../utils/writer.js');
var adoptionS = require('../service/adoptionService.js');

module.exports.adoptionGET = async function adoptionGET(req, res, next) {
  try {
    const response = await adoptionS.adoptionGET();
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.adoptionPOST = async function adoptionPOST(req, res, next) {
  try {
    const response = await adoptionS.adoptionPOST(req.body);
    utils.writeJson(res, response, 201);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.adoption_idDELETE = async function adoption_idDELETE(req, res, next) {
  try {
    const response = await adoptionS.adoption_idDELETE(req.params.id);
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.adoption_idGET = async function adoption_idGET(req, res, next) {
  try {
    const response = await adoptionS.adoption_idGET(req.params.id);
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};

module.exports.adoption_idPUT = async function adoption_idPUT(req, res, next) {
  try {
    const response = await adoptionS.adoption_idPUT(req.body, req.params.id);
    utils.writeJson(res, response, 200);
  } catch (error) {
    utils.writeJson(res, { error: error.message }, 500);
  }
};
