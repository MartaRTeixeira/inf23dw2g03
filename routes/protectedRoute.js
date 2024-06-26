const router = require('express').Router();
const protectedController = require('../controllers/protectedController');
const middleware = require('../controllers/middleware');

router.get('/protected', (req,res,next) => {
    middleware(req,res,() => {
        protectedController.getProtectedResource(req,res);
    });
});


module.exports = router;