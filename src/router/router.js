const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.render("index")
})

router.get("/about", (req, res) =>{
    res.send("Página About")
})

module.exports = router