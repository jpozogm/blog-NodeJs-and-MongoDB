var express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

//mongodb
const url = "mongodb://admin:admin@localhost:27018/itemsDB?authSource=admin";

var app = express();
app.use(express.json());

let items;

//Methods

function toResponse(doc) { //transforma el _id de mongo en el id del objeto que usa node.

    if (doc instanceof Array) {
        return doc.map(elem => toResponse(elem));
    } else {
        console.log(`DOC****** ${doc}`);
        let { _id, ...ret } = doc;
        ret.id = doc._id.toString();
        return ret;
    }
}

//post
app.post('/items', async (req, res)=>{ //async
    const it = req.body

    
    if (typeof it.description != "string" || typeof it.checked != 'boolean') {
        res.sendStatus(400);
    } else {
        //create object
        const newIt = {
            description: it.description,
            checked: it.checked
        };

        //save resource
        await items.insertOne(newIt); // await + insertOne

        //Return new resource
        res.json(toResponse(newIt)); //incluyes el toResponse para cambio IT
    }
})

//GET
app.get('/items', async (req, res)=>{ //async
    const allItems = await items.find().toArray(); // await + find().toArray()
    res.json(toResponse(allItems));
});


app.get('/items/:id', async (req, res)=>{ //async
    const id= req.params.id;
    const it= await items.findOne({_id: new ObjectId(id)}); // await + findOne

    if(!it) {
        res.sendStatus(404);
    } else {
        res.json(toResponse(it)); //toResponse
    }
});

//delete

//borrar item
app.delete('/items/:id', async (req, res)=> { //async
    const id = req.params.id;
    const it = await items.findOne({_id: new ObjectId(id)}); // await + findOne

    if(!it) {
        res.sendStatus(404);
    } else {
        items.deleteOne({_id: new ObjectId(id)}); // deleteOne + 
        res.json(toResponse(it)); //toResponse
    }
});


//Put
app.put('/items/:id', async (req, res)=>{ //async
    const id = req.params.id;
    const it= await items.findOne({_id: new ObjectId(id)}); //find One

    if(!it){
        res.sendStatus(404);
    } else {
        const itReq = req.body;

        //validation
        if (typeof itReq.description != "string" || typeof itReq.checked != "boolean" ) {
            res.sendStatus(404);
        } else {
            //crerate object with needed fields and assign it

            const newIt = { //sin id
                description: itReq.description,
                checked: itReq.checked
            };
            
            //upgrate resource
            await items.updateOne({_id: new ObjectId(id)}), {$set: newIt}; // await + update one

            //return new resource
            newIt.id = id; // igualas id
            res.json(newIt);
        }
    }
})




async function dbConnect() {

    let conn = await MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log("Connected to Mongo");

    items = conn.db().collection('items'); //items es el nombre del documento
}

async function main() {

    await dbConnect();

    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();