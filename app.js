const config = require('./config');
const express = require('express');
const morgan = require('morgan'); 
const app = express();


const dbConnect = require('./db/connect')
const api = require('./routes/index')

const cors = require('cors');

app.use(cors());
app.use(morgan(':method  :status :url'));
app.use(express.json());
app.use("/", api);

//
(async function main(){
    await dbConnect();
    app.listen(config.port);
})();

module.exports = app;


