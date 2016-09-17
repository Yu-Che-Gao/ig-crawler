const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
app.use(session({
    secret: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 86400 * 24 * 30 }
}));
app.use(require('./controllers'));
app.listen(port, () => { console.log('now listening on port ' + port) });