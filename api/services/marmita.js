const model = require('../models/marmitaModel')

function listarMarmitas(){
    return new Promise((resolve, reject) => {
        model.findAll().then(res => {
            resolve(res);
        }).catch(err => {
            console.log('erro listar marmita: '+err);
        })
    });
}

//
// function insertMarmita(data){
//     return new Promise((resolve, reject) =>{
//         model.create(data).then(res => {
//             resolve(res);
//         }).catch(err => {
//             console.log('erro inserir marmita: '+err);
//             reject(err);
//         })
//     });
// }
//
// function updateMarmita(data){
//     return new Promise((resolve, reject) =>{
//         model.update(data, {
//             where: { id:data.id }
//         }).then(res => {
//             resolve(res);
//         }).catch(err => {
//             console.log('erro editar marmita: '+err);
//             reject(err);
//         })
//     });
// }
//
// function deleteMarmita(data){
//     return new Promise((resolve, reject) => {
//         model.destroy({where:{ id:data.id}}).then(res => {
//             resolve(res);
//         }).catch(err => {
//             console.log('erro excluir marmita: '+err);
//             reject(err);
//         });
//     });
// }
//
// module.exports = {listarMarmitas, insertMarmita, updateMarmita, deleteMarmita};
module.exports = {listarMarmitas};