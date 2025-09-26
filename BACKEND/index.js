import express from "express";
const app = express();

app.get("/", function(req, res) {
    res.send("Hola desde js");
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});