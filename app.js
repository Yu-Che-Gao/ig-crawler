const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
app.use(cookieParser({
    cookieSecret: '@2uaiigol'
}));
app.use(session());
app.use(require('./controllers'));
app.listen(port, () => { console.log('now listening on port ' + port) });