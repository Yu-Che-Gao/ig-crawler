const session = require('express-session');

function entrance(req, res) {
    let accessToken = req.session.access_token;
    if (accessToken) {
        res.send(accessToken);
    } else {
        res.redirect('/token');
    }
}

exports.entrance = entrance;