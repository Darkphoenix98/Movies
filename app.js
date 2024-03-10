const express = require('express');


const app = express();
const {  mongoConn } = require('./databases/configuration');
mongoConn()

const cors = require('cors');

const Directores = require('./routes/director');
const Generos = require('./routes/genero');
const Tipos = require('./routes/tipo');
const Productoras = require('./routes/productora');
const Media = require('./routes/media');



//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api/directores',Directores);
app.use('/api/generos', Generos);
app.use('/api/tipos', Tipos);
app.use('/api/productoras', Productoras);
app.use('/api/media', Media);

module.exports = app;