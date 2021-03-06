const session = require('express-session');
const request = require('request');
const requestPromise = require('request-promise');
const cookieParser = require('cookie-parser');

var clientId = 'd852506dbe7e48fb8c769a7b7065176f';
var clientSecret = '870ada2892e54ec493683b8d71b83845';
var redirectUri = 'https://ig-crawler.herokuapp.com/callback';

function requestCode(req, res) {
    res.redirect('https://instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=code');
}

function getCodeOrToken(req, res) {
    req.session.code = req.query.code;
    res.redirect('/accessToken');
}

function requestAccessToken(req, res) {
    requestPromise({
        method: 'POST',
        uri: 'https://api.instagram.com/oauth/access_token',
        form: {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri,
            code: req.session.code
        }
    }).then((body) => {
        console.log(body);
        let json = JSON.parse(body);
        req.session.access_token=json.access_token;
    }).then((result) => {
        res.redirect('/');
    })
}

exports.requestCode = requestCode;
exports.getCodeOrToken = getCodeOrToken;
exports.requestAccessToken = requestAccessToken;