// Controller pour ma route login.js
var authentification = {
    username: 'test',
    password: 'test'
}

var loginController = {
    processLogin: (req,res) => {
// Je vérifie que le login / mot de passe correspondent à mon objet "authentification".
    if(req.body.username === authentification.username && req.body.password === authentification.password) {
// Je renvoies un objet JSON en réponse. Connected : booleen + Message : string
        res.json({ connected : true, message : "You are logged. Welcome !" });
    }
    else if(req.body.username === authentification.username && !(req.body.password === authentification.password)) {
        res.json({ connected : false, message : "You are not logged. Please verify your password." });
    }
    else if(!(req.body.username === authentification.username) && req.body.password === authentification.password) {
        res.json({ connected : false, message : "You are not logged. Please check your username." });
    }
    else {
        res.json({ connected : false, message : "You are not logged. Do you want to create an account?" });
    }
    }
}

module.exports = loginController;