const express = require('express');
const app = express();
const passport= require('passport');

const api = require('./routes/index')

app.use(express.json());
app.use("/", api);



module.exports = app;


