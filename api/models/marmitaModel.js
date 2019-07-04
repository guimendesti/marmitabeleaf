const db = require('../config/db')
const type = db.Sequelize

let marmitaModel = db.define('marmita',{
    idmarmita:{
        type: type.INTEGER,
        primaryKey: true
    },
    nome: type.STRING,
    descricao: type.STRING,
    ingredientes: type.STRING,
    estoque: type.INTEGER,
    imagem: type.STRING,
    preco: type.FLOAT,
    tipodesconto: type.STRING,
    desconto: type.FLOAT
});

module.exports = marmitaModel;