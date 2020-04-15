var express = require('express');
var mongoose = require('mongoose');

//mongodb
const url = "mongodb://admin:admin@localhost:27018/itemsDB?authSource=admin";

var app = express();
app.use(express.json());

let items;

//Methods

function toResponse(doc) {

    if(doc instanceof Array){
        return doc.map(elem => toResponse(elem));
    } else {
        let ret = doc.toObject({ versionKey: false });
        ret.id = ret._id.toString();
        delete ret._id;
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
        const newIt = new items ({
            description: it.description,
            checked: it.checked
        });

        //save resource
        await newIt.save(); // await + save

        //Return new resource
        res.json(toResponse(newIt)); //incluyes el toResponse para cambio IT
    }
})

//GET
app.get('/items', async (req, res)=>{ //async
    const allItems = await items.find().exec(); // await + find().exec()
    res.json(toResponse(allItems));
});


app.get('/items/:id', async (req, res)=>{ //async
    const id= req.params.id;
    const it= await items.findById(id); // await + findById(id)

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
    const it = await items.findById(id); // await + findById(id)

    if(!it) {
        res.sendStatus(404);
    } else {
        const ItemDelete = await items.findByIdAndDelete(id); // findByIdAndDelete 
        res.json(toResponse(ItemDelete)); //toResponse
    }
});


//Put
app.put('/items/:id', async (req, res)=>{ //async
    const id = req.params.id;
    const it= await items.findById(id); //findById

    if(!it){
        res.sendStatus(404);
    } else {
        const itReq = req.body;


        //validation
        if (typeof itReq.description != "string" || typeof itReq.checked != "boolean" ) {
            res.sendStatus(404);
        } else {
            //update fields in model
                it.description = itReq.description; //cambia respecto a mongodb
                it.checked = itReq.checked;
            
            //upgrate resource
            let itemSave = await it.save() // await + save

            //return update resource
            res.json(toResponse(itemSave));
        }
    }
});


async function dbConnect() {
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log("Connected to Mongo");

    var adSchema = new mongoose.Schema({
        description: String,
        checked: Boolean
    });

    items = mongoose.model('items', adSchema);
}

async function main() {
    await dbConnect();
    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();