const express = require('express');
const animalController = require('../controllers/animalController');

const router = express.Router();


router.get('/animal', animalController.animalGET);
router.post('/animal', animalController.animalPOST);
router.get('/animal/:id', animalController.animal_idGET);
router.put('/animal/:id', animalController.animal_idPUT);
router.delete('/animal/:id', animalController.animal_idDELETE);
router.get('/animal/:id/person', animalController.getpersons);
router.get('/animal/:id/volunteer', animalController.getvolunteers);
router.get('/animal/:id/adoption', animalController.getadoption);

module.exports = router;