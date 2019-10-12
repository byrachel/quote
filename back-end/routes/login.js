var express = require('express');
var router = express.Router();

// Controllers imports
var loginController = require('../controllers/login');

/* POST login / Mot de passe */
router.post('/', function(req, res, next) {
    // J'appelle mon controller et je passe en paramètres mes res et req que j'utilise.
    loginController.processLogin(req, res);
    res.end();
});

module.exports = router;
