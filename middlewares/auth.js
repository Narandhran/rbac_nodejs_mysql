const JwtService = require('../security/jwt.service'),
    envelope = require('../utils/envelope'),
    p_util = require('../security/permission.util');

function authenticate(req, res, next) {
    if (JwtService.verify(req.headers.authorization, req.body)) {
        req.verifiedToken = JwtService.verify(req.headers.authorization, req.body)
        next()
    }
    else {
        res.status(401)
        res.send(envelope.wrapUnauthorized('token error', 'Invalid Token')).end()
    }
}
function authorize(aRoles = [], aResource) {
    if (typeof aRoles === 'string') {
        aRoles = [aRoles];
    }
    return [
        (req, res, next) => {
            let tMethod = req.method,
                tRole = req.verifiedToken.auth.role,
                tResource = req.verifiedToken.auth.resource,
                tPermission = req.verifiedToken.auth.permission,
                tResources = [], tPermissions = [];
            tResources = tResource.split(",");
            tPermissions = tPermission.split(",");
            if (aRoles.indexOf(tRole) > -1) {
                let resIndex = tResources.indexOf(aResource);
                if (resIndex > -1) {
                    p_util.permission.forEach(p => {
                        if (p.id == tPermissions[resIndex] && p.perm.includes(tMethod))
                            next()
                        else
                            res.send(envelope.wrapUnauthorized('permission is not given', 'Access Denied')).end()
                    });
                }
                res.send(envelope.wrapUnauthorized('not authorized to access this resource', 'Access Denied')).end()
            }
            res.send(envelope.wrapUnauthorized('not authorized', 'Access Denied')).end()
        }
    ];
};

module.exports = { authorize, JwtService, authenticate };
