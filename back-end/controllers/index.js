// Controller pour ma route index.js

var index = {
    processData: (req,res) => {
        return "Votre adress IP est :" + req.ip;
    }
}

module.exports = index;