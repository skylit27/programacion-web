const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
// conecxion Db
const db = require("./config/db");

//modelos
require("./models/BranchOfficeModel");
require("./models/ImageModel");
require("./models/ModelVehicleModel");
require("./models/ReservationModel");
require("./models/VehicleBrandModel");
require("./models/VehicleModel");

//middlewares


// authenticate para conectarce a una base de datos existente
// sync para crear la base de datos
db.sync()
  .then(() => console.log("Conections serve success ", "🚀 ❤️"))
  .catch((e) => console.log(e));

// crear una app de Express
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static("public"));
app.use(express.json());
// Bootstrap 4 y librerías necesarias
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/node_modules/popper.js/dist"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

//Habliltar pug
app.set("view engine", "pug");

//añadir carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

// habilitar body parse
app.use(bodyParser.urlencoded({ extended: true }));

// middleware
// app.use(imageHelper.image());

//Rutas
app.use("/:lang([a-z]{2})?", routes());
app.use("/dashboard", routes());

//puerto
app.listen(3000);
