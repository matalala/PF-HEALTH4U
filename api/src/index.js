//Archivo que arranca el servidor 
require("dotenv").config();
const express = require('express');

const morgan = require('morgan');
//morgan permite ver las peticiones en consola

const cors = require('cors');
//cors permite comunicar el servidor y el frontend 

const routes = require('./routes/index.js')

const { dbConn } = require("./db.js")
//conectamos la DB

const {createRoles} = require('./libs/initialSetup')

const app = express();
createRoles();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/', routes)
// Error catching endware.
app.use((error, req, res, next) => {
    console.log(error)
    const name = error.name
    const message = error.message;
    // console.error(error);
    res.status(400).send(name + message);
});
const host=process.env.HOST||"0.0.0.0"
app.listen(process.env.PORT,host, () =>
{ // puerto 3001
    console.log('Server listening on port 3001'); // eslint-disable-line no-console
});

dbConn();
