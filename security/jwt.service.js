const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const jwtUtil = require('./jwt.utils')

var privateKEY = fs.readFileSync(path.resolve('security/private.key'), 'utf8');
var publicKEY = fs.readFileSync(path.resolve('security/public.key'), 'utf8');

module.exports = {
    sign: (payload, $Options) => {
        var signOptions = {
            issuer: jwtUtil.issuer,
            subject: $Options.subject,
            audience: jwtUtil.audience,
            expiresIn: jwtUtil.expiration,
            algorithm: jwtUtil.algorithm
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
    verify: (token, $Option) => {
        var verifyOptions = {
            issuer: jwtUtil.issuer,
            subject: $Option.subject,
            audience: jwtUtil.audience,
            expiresIn: jwtUtil.expiration,
            algorithm: [jwtUtil.algorithm]
        };
        try {
            return jwt.verify(token, publicKEY, verifyOptions);
        } catch (err) {
            return false;
        }
    },
    decode: (token) => {
        return jwt.decode(token, { complete: true });

    }
}