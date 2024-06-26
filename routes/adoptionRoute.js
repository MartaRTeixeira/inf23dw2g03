const express = require('express');
const adoptionController = require('../controllers/adoptionController');

const router = express.Router();


router.get('/adoption', adoptionController.adoptionGET);
router.post('/adoption', adoptionController.adoptionPOST);
router.get('/adoption/:id', adoptionController.adoption_idGET);
router.put('/adoption/:id', adoptionController.adoption_idPUT);
router.delete('/adoption/:id', adoptionController.adoption_idDELETE);

module.exports = router;