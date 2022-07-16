const express = require('express')

const app = express()

const frase = 'Hola mundo como estan'

app.get("/api/frase", (req, res) =>{
    res.send(frase)
})

app.get('/api/letras/:num', (req, res) =>{
    const letras = Array.from(frase)
    const index = parseInt(req.params.num, 10) - 1
    console.log(letras.length)
    if(isNaN(req.params.num)){
        res.json({ERROR: "El parametro no es un numero"})
    } else if(req.params.num > letras.length || req.params.num < 1){
        res.json({ERROR: "El parametro esta fuera del rango"})
    } 
        res.json({letra: letras[index]})
})

app.get('/api/palabra/:num', (req, res) =>{
    const index = req.params.num - 1
    const palabra = frase.split(" ")
    console.log(index)
    if(isNaN(req.params.num)){
        res.json({ERROR: "El parametro no es un numero"})
    } else if(req.params.num > palabra.length || req.params.num < 1){
        res.json({ERROR: "El parametro esta fuera del rango"})
    } 
        res.json({palabra: palabra[index]})
})


//Creacion de servidor en puerto 8080
app.listen(8080, () => {
    console.log("Server in port 8080")
})

app.on("error", (error) => console.log(`Error en sevidor ${error}`));
