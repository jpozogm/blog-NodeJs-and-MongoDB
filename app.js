var express = require('express');
var app = express();

const Product = require('./models/post')
const PostController = require('./controllers/post-contollers')
const PostCtrl = new PostController();
const api = require('./routes/index')

app.use(express.json());
app.use("/", api);

module.exports = app;
