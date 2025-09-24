import express from "express";
import ejs from "ejs";
import rutas from "./rutas/rutas.js";

const app = express();

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", "./views"); // Asegurar que busque las vistas en la carpeta views

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas
app.use("/", rutas);

// Middleware para archivos estáticos (CSS, JS, imágenes)
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("SERVIDOR EN http://localhost:" + PORT);
});