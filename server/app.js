const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//genera una app con express
const app = express();

//Creamos una variable de cors que permita cualquer origen
var corsOptions = {
    origin: "*"
}

// Middlewares (son las cnfiguraciones que utilizara la app)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));

// Rutas (aqui se agregan)
const indexRoutes = require("./routes/index.routers.js");//aqui se inporta la ruta

app.use("/", indexRoutes);//aqui se agrega a la aplicacion
//app.use("/index", indexRoutes); este es un ejemplo de manejo de rutas: http://localhost:4000/index

// Middleware para manejar solicitudes OPTIONS
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).send();
    } else {
        next();
    }
});

//Default (Si no encuentra ninguna ruta)
app.use((req,res,nex) => {
    res.status(404).json({message: "Not found"});
})

module.exports = app;