const config = require('./config');
const express = require('express');
const app = express();
const passport= require('passport');
const fs = require('fs');

const dbConnect = require('./db/connect')

const api = require('./routes/index')

app.use(express.json());
app.use("/", api);

//
(async function main(){
    await dbConnect();
    app.listen(config.port);

})();

module.exports = app;


