const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('../app');
const https = require('https');
const fs = require('fs');

const config = require('../config');
const url = config.db;


const checkOWordsOnLoad = require("../validators/checkWordsInit");
const mycheckOWordsOnLoad = new checkOWordsOnLoad()
const checkAdminsOnLoad = require("../validators/checkAdminUserInit");
const myheckAdminUserInit = new checkAdminsOnLoad()

const connectToDb = async () => {
    try {
        await mongoose.connect(url,
            {
                auth: { 'authSource': 'admin' },
                user: 'admin',
                pass: 'admin',
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
            
            const responseWordsOnLoad =  await mycheckOWordsOnLoad.checkOWordsOnLoad();
            const responseAdminsOnLoad =   await myheckAdminUserInit.checkAdmins();
          
            console.log(`Server started in port ${config.port}`,' =====>',responseWordsOnLoad,' =====>', responseAdminsOnLoad)
    } catch (err) {
        console.log(err);
    }
}













   //const responseAdminsOnLoad =   await checkAdminUserInit.checkAdminsOnLoad();
 //console.log(`Server started in port ${config.port}`,' =====>',responseWordsOnLoad,' =====>', responseAdminsOnLoad);
        
 

// Para certificación HTTPS
//openssl req -nodes -new -x509 -keyout server.key -out server.cert

/* https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3443, () => {
    console.log("Https server started in port 3443");
});  */




module.exports = connectToDb;



