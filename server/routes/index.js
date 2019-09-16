module.exports = (app) => {
    app.get('/', (req, res) => res.send({ message: 'Welcome to web application' }));
}
