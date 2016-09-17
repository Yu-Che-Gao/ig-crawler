const session = require('express-session');

function entrance(req, res) {
    let accessToken = req.session.access_token;
    res.send(accessToken);
}

exports.entrance = entrance;