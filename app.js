const importFunc = require("./func")
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", 'hbs');
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use("/js", express.static(path.join(__dirname,"./js")))
app.get("/", function (req,res){
    const sample = () =>{
        return "próba"
    }
    res.render("index", {
        pageTitle: "Lekcja NodeJS 25.04",
        subTitle: importFunc.someTitle,
        newVar: sample()
    })
    
})
app.get("/ola", function (req,res){
    res.render("ola")
    
})

app.listen(port, (err) => {
    console.log("server działa na porcie", port)
    if (err) { return console.log("Błąd servera", err)}
})

