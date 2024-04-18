const { connect } = require('mongoose')
require('dotenv').config()
const colors = require('colors')

connect(process.env.MONGODB_TOKEN, {
    dbName: "BancodeDados"
}).then(() => {
    console.log(colors.red("=== BANCO DE DADOS ==="))
    console.log(colors.green("->  ") + colors.gray('Conexão ') + colors.cyan("MongoDB ") + colors.gray("Estabelecida com sucesso"))
    console.log(colors.green("->  ") + colors.gray('Conexão ') + colors.cyan("QuickDB ") + colors.gray("Estabelecida com sucesso"))
})