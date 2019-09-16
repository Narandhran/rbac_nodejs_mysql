module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to mobile application' }));
}
