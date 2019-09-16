const bcrypt = require('bcrypt'), jwtUtil = require('./jwt.utils');


module.exports = {
    encrypt: (plainText) => {
        return bcrypt.hashSync(plainText, jwtUtil.salt)
    },
    validate: (plainText, hashText) => {
        if (bcrypt.compareSync(plainText, hashText))
            return true;
        else
            return false
    },
    generatePassword: () => {
        var length = 12,
            charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_@',
            persisted = '';
        for (let i = 0, n = charset.length; i < length; ++i) {
            persisted += charset.charAt(Math.floor(Math.random() * n));
        }
        return persisted;
    }
}