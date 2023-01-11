const express = require("express")
const app = express()
const logger = require("morgan")
const handlebars = require("express-handlebars")

const PORT = 3333

app.use ((req, res, next) => {
     console.log(`Primeiro Middleware Requisição  ${req.method} ${req.url}`)
     next()
 })

app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", `${__dirname}/views`)

app.engine("handlebars", handlebars.engine({
    helpers: require(`${__dirname}/views/helpers/helpers.js`)
}))

 app.use(logger())

 app.use("/img", express.static(`${__dirname}/../public/img`))

app.listen(PORT, () => {

    console.log(`Servidor ouvindo na porta ${PORT}`);
})