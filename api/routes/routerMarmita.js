const router   = require('../config/server').server;
const service  = require('../services/marmita');
const validarToken = require('../config/token');
const returnJson = require('../config/functions').returnJson;


router.get('/marmitas', (request, response, next) => {
    if (validarToken(request.header('token'))){
        service.listarMarmitas().then(data => {
            response.send(200, returnJson(true, 'busca realizada',data));
        }).catch(err => {
            response.send(503, returnJson(true, 'falha ao buscar',err));
        })
    } else {
        response.send(403);
    }
    next();
});

router.post('/insertMarmita', (request, response, next) => {
    service.insertMarmita(request.body).then(data => {
        response.send(200, 'Marmita inserida com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/updateMarmita', (request, response, next) => {
    service.updateMarmita(request.body).then(data => {
        response.send(200, 'Marmita atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/deleteMarmita', (request, response, next) => {
    service.deleteMarmita(request.body).then(data => {
        response.send(200, returnJson(true, 'Marmita excluída com sucesso',data));
    }).catch(err => {
        response.send(400, returnJson(false, 'falha ao excluir',err));
    })
    next();
});


module.exports = router;
