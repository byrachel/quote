/* Import modules */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Import routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

/* Create app : Objet Express */
var app = express();

/* Configuration */
/* Lire les erreurs côté serveur (Log) */
app.use(logger('dev'));
/* Support Json */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* Lire contenu des cookie */
app.use(cookieParser());
/* Route qui sert du statique vers dossier public :
accessible à tous et sans traitement */
app.use(express.static(path.join(__dirname, 'public')));

// Import Middlewares
var cors = require('./middlewares/cors');
app.use(cors.handle);

/* Autoriser uniquement les requêtes asynchrones */
app.use((req,res,next) => {
    /* Filtre les requêtes - Si pas XHR > Erreur 405 */
    if(!req.xhr) {
        return res.status(405).end();
    }
    next();
});

/* Routes autorisées */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

module.exports = app;
