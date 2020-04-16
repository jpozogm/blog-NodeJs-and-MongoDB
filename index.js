var mongoose = require('mongoose');
const app = require('./app.js');


//mongodb
const url = "mongodb://admin:admin@localhost:27018/postsDB?authSource=admin";

let posts;

async function dbConnect() {
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log("Connected to Mongo");

    var adSchema = new mongoose.Schema({

        postAuthorName: {
            type: String,
            require: true,
        },
        
        postAuthorNickName: {
            type: String,
            require: true,
        },

        postTittle: {
            type: String,
            require: true
        },

        postContent: {
            type: String,
            require: true
        },

        postComments: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Post",
            require: false
        }],
    });

    posts = mongoose.model('posts', adSchema);
}

async function main() {
    await dbConnect();
    app.listen(3000, () => console.log('Server started in port 3000'));
}
main();
