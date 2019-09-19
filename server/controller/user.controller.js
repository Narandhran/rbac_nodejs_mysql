const USER = require('../../models').User,
    ENVELOPE = require('../../utils/envelope'),
    CRYPTO_SERVICE = require('../../security/crypto.service'),
    JWT_SERVICE = require('../../security/jwt.service'),
    AUTH = require('../../models').Auth;

module.exports = {
    login(req, res) {
        let user = req.body.username, pass = req.body.password;
        USER.findOne({
            where: {
                username: user
            }
        }).then(user => {
            if (user) {
                if (CRYPTO_SERVICE.validate(pass, user.password)) {
                    AUTH.findOne({ where: { fk_user: user.id_pk } })
                        .then(auth => {
                            let token = JWT_SERVICE.sign(
                                {
                                    username: user.username,
                                    auth: auth
                                }, { subject: 'jwtToken' }
                            )
                            res.send(ENVELOPE.wrapSuccess(token, 'login success'));
                        })
                }
                else
                    res.send(ENVELOPE.wrapNotFound('Invalid Password', 'Check your password'));
            } else res.send(ENVELOPE.wrapNotFound('Invalid User', 'Check your email'));
        })
    },
    authorize(req, res) {
        res.send('success');
    },
    authorize1(req, res) {
        res.send('success');
    },
    authorize2(req, res) {
        res.send('success');
    },
    authorize3(req, res) {
        res.send('success');
    }
}
