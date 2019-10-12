// Handle CORD request

/* CORS : Accepte de servir à d'autres origines que lui-même 
requête avec le verbe OPTIONS -> création d'un middleware
qui va ajouter un header pour dire qu'on autorise toutes les origines */

var cors = {
    handle: (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === 'OPTIONS') {
            res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
            /* Autorise l'accès sans rien ajouter (objet json vide) */
            return res.status(200).json({});
        }
        /* Passe au middleware suivant */
        next();
    }
}

module.exports = cors;