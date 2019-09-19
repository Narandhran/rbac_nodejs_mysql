const authorize = require('../../middlewares/auth').authorize,
    authenticate = require('../../middlewares/auth').authenticate,
    userController = require('../controller/user.controller');

module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to web application' }));
    app.post('/login', userController.login);
    app.post('/test', [authenticate, authorize(['ADMIN', 'USER'],'1')], userController.authorize);
}
