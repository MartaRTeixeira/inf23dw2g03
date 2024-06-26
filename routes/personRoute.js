const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();


router.get('/person', personController.person_get);
router.post('/person', personController.personPOST);
router.get('/person/:id', personController.person_idGET);
router.put('/person/:id', personController.person_idPUT);
router.delete('/person/:id', personController.person_idDELETE);

module.exports = router;