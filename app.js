// Petición web mediante node
let express = require("express");
let app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(8081, () => {
    console.log("Server in 8081");
})