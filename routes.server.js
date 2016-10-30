var ctrl = require('./controller.server');

exports.init = function (app) {
    app.get('/api/rota1', ctrl.funcao);

    app.param('camid', ctrl.funcao);
};