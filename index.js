var mongoose = require('mongoose');
const app = require('./app');
const https = require('https');
const fs = require('fs');






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


// Para certificación HTTPS
//openssl req -nodes -new -x509 -keyout server.key -out server.cert
 https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3443, () => {
    console.log("Https server started in port 3443");
}); 
