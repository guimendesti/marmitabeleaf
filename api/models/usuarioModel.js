const db = require('../config/db')
const type = db.Sequelize

let usuarioModel = db.define('usuario',{
    idusuario:{
        type: type.INTEGER,
        primaryKey: true
    },
    nome: type.STRING,
    usuario: type.STRING,
    senha: type.STRING
});

module.exports = usuarioModel;