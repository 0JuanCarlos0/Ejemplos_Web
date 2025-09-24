import { Router } from "express";

const router = Router();

// Ruta para la página de inicio
router.get("/", (req, res) => {
    res.render("index");
});

// Ruta para la página de contactanos (GET)
router.get("/contactanos", (req, res) => {
    res.render("contactanos");
});

// Ruta para procesar el formulario de contactanos (POST)
router.post("/contactanos", (req, res) => {
    const { 
        nombre, 
        edad, 
        email, 
        telefono, 
        carrera, 
        semestre, 
        conocimiento, 
        intereses, 
        comentarios 
    } = req.body;
    
    console.log("=== DATOS RECIBIDOS DEL FORMULARIO ===");
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Email:", email);
    console.log("Teléfono:", telefono);
    console.log("Carrera:", carrera);
    console.log("Semestre:", semestre);
    console.log("Conocimiento:", conocimiento);
    console.log("Intereses:", intereses);
    console.log("Comentarios:", comentarios);
    console.log("=====================================");
    
    // Aquí podrías guardar en una base de datos
    // Por ahora solo respondemos con confirmación
    
    res.json({ 
        mensaje: "Formulario recibido correctamente. Tus datos han sido almacenados.",
        id: Date.now(), // ID temporal
        timestamp: new Date().toISOString()
    });
});

// Ruta para usuarios (placeholder)
router.get("/usuarios", (req, res) => {
    res.send("Página de usuarios - En construcción");
});

// Ruta de ejemplo
router.get("/abc", (req, res) => {
    res.send("Estás en abc");
});

export default router;