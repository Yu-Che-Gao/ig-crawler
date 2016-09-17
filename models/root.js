const session = require('express-session');

function entrance(req, res) {
    try {
        let accessToken = req.session.access_token;
        res.send(accessToken);
    } catch(e) {
        res.redirect('/');
    }
}

exports.entrance = entrance;