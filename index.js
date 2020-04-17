var mongoose = require('mongoose');
const app = require('./app.js');


//mongodb
const config = require('./config');
const url = config.db;


let posts;

async function dbConnect() {
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log("Connected to Mongo");
}

async function main() {
    await dbConnect();
    app.listen(config.port, () => console.log(`Server started in port ${config.port}`));
}
main();
