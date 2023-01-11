const index = (req, res) => {
    const conteudo = "UFAM"
    res.render("main/index", {
        conteudo
    })

}
const about = (req, res) => {
    res.render("main/about")
}

module.exports = { index, about}