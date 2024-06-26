const express = require('express');
const volunteerController = require('../controllers/volunteerController');

const router = express.Router();


router.get('/volunteer', volunteerController.volunteerGET);
router.post('/volunteer', volunteerController.volunteerPOST);
router.get('/volunteer/:id', volunteerController.volunteer_idGET);
router.put('/volunteer/:id', volunteerController.volunteer_idPUT);
router.delete('/volunteer/:id', volunteerController.volunteer_idDELETE);

module.exports = router;