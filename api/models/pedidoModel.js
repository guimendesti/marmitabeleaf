const db = require('../config/db')
const type = db.Sequelize

let pedidoModel = db.define('pedido',{
    idpedido:{
        type: type.INTEGER,
        primaryKey: true
    },
    idusuario: type.INTEGER,
    datapedido: type.DATETIME,
    valortotal: type.FLOAT,
    status: type.STRING
});

module.exports = pedidoModel;