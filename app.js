// Petición web mediante node
let express = require("express");
let app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(8081, () => {
    console.log("Server in 8081");
})

/* Cada vez que se quiera realizar cambios y subirlos al repositorio:
- git add .
- git commit -m "comentario"
- git push
*/