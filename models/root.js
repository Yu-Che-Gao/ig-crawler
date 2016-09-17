const session = require('express-session');

function entrance(req, res) {
    if (typeof (req.session.access_token) !== 'undefined') {
        let accessToken = req.session.access_token;
        res.send(accessToken);
    } else {
        res.redirect('/token');
    }
}

exports.entrance = entrance;