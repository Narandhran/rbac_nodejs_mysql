const JwtService = require('../security/jwt.service')
const envelope = require('../utils/envelope')

function tokenVerification(req, res, next) {
    if (JwtService.verify(req.headers.authorization, req.body)) {
        req.verifiedToken = JwtService.verify(req.headers.authorization, req.body)
        next()
    }
    else {
        res.status(401)
        res.send(envelope.wrapUnauthorized('token error', 'Invalid Token')).end()
    }
}
function authorize(roles = []) {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return [
        (req, res, next) => {
            let token = req.verifiedToken;
            if (token && roles.length && !roles.some(r => token.roles.indexOf(r) >= 0)) {
                res.status(403)
                return res.send(envelope.wrapUnauthorized("Unauthorized", "Access denied!"))
            }
            else
                next();
        }
    ];
};

module.exports = { authorize, JwtService, tokenVerification };
