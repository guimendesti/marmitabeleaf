function returnJson(success, msg, data){
    const retorno = {
        success: success,
        message: msg,
        details: data
    }
    return retorno;
}


module.exports = {returnJson};