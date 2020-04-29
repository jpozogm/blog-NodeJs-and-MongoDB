
const OffensiveWordSchema = require ('../../models/offensiveWords');

module.exports = class OffensiveWordRepository {

    async saveOffensiveWord(offWord) {
        try{
            //create object
            const newOffensiveWord = new OffensiveWordSchema ({
                word: offWord.word,
                level: offWord.level,
            });
        
            //save resource
            return await newOffensiveWord.save(); 
        } catch(err) {
            console.log(err);
        }
    };

    async getOffensiveWords() {
            const allOffensiveWords = await OffensiveWordSchema.find({});
            return allOffensiveWords; 
    }

    async getOffensiveWord(req, res) {
            const id= req.params.id;
            const ow= await OffensiveWordSchema.findById(id); 
        
            if(!ow) {
                res.sendStatus(404);
            } else {
                res.json(ow); 
            }
    };

    async updateOffensiveWord(req, res) {
        try {
            const id = req.params.id;
            const ow= await OffensiveWordSchema.findById(id); 

            if(!ow){
                res.sendStatus(404);
            } else {
                const owReq = req.body;


                //validation
                if (typeof owReq.word != "string" || typeof owReq.level != "number") {
                    res.sendStatus(404);
                } else {
                    //update fields in model

                        ow.word = owReq.word;
                        ow.level = owReq.level;
                    
                    //upgrate resource
                    let offensiveWordSave = await ow.save() 

                    //return update resource
                    res.json(offensiveWordSave);
                }
            }
        } catch(err) {
            console.log(err);
        }
    };
    
    async deleteOffensiveWord(req, res) {
        try{
            const id = req.params.id;
            const ow = await OffensiveWordSchema.findById(id); 

            if(!ow) {
                res.sendStatus(404);
            } else {
                const OffensiveWordDelete = await OffensiveWordSchema.findByIdAndDelete(id); 
                res.json(OffensiveWordDelete); 
            }
        } catch(err) {
            console.log(err);
        }
    }
}