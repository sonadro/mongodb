const jwt = require('jsonwebtoken');

const testWare = function(req, res, next) {
    console.log('test middleware');
    res.cookie('testCookie', 'value', {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        secure: false,
        sameSite: "Lax"
    });
    next();
}

module.exports = { testWare };