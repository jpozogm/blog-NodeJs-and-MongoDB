const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


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
          
            console.log(`Server started in port ${config.port}`,' || ',responseWordsOnLoad,' || ', responseAdminsOnLoad)
            
    } catch (err) {
        console.log(err);
    }
}

// Para certificación HTTPS
//openssl req -nodes -new -x509 -keyout server.key -out server.cert

/* https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3443, () => {
    console.log("Https server started in port 3443");
});  */

module.exports = connectToDb;



