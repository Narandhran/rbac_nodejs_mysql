const authorize = require('../../middlewares/auth').authorize,
    authenticate = require('../../middlewares/auth').authenticate,
    userController = require('../controller/user.controller');

module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to web application' }));
    app.post('/login', userController.login);
    app.get('/read', [authenticate, authorize(['ADMIN', 'USER','RM'],'1')], userController.authorize);
    app.put('/update', [authenticate, authorize(['ADMIN','RM'],'2')], userController.authorize1);
    app.delete('/delete', [authenticate, authorize(['ADMIN'],'1')], userController.authorize2);
    app.post('/create', [authenticate, authorize(['ADMIN','RM','USER'],'2')], userController.authorize3);
}
