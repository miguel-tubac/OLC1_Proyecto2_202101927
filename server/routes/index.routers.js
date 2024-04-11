//Aqui bamos a definir las rutas que vamos a utilizar como nuestros enpionts

const express = require('express');
const router = express.Router();

// Importar nuestros controladores es decir las funciones
//Controller
const indexController = require("../controller/index.controller.js");


// Routes
router.get("/", indexController.index);//este es para obtener informacion
router.post("/analizar", indexController.analizar);//con esta enpiont analizamos
//router.get("/uno", indexController.index); este es el ejemplo de una ruta a la que se le concatena al ejemplo en app: http://localhost:4000/index/uno
//router.post(); ejemplo de como agregar mas rutas, post para colocar la informacion
//router.put();
//router.delete();

module.exports = router;