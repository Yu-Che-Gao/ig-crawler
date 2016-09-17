const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(require('./controllers'));
app.listen(port, () => { console.log('now listening on port ' + port) });