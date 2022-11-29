import mongoose from "mongoose"

export async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/mongodbgraphql', {
            useNewUrlParser: true
        })
        console.log("Db is connect")
    } catch(error){
        console.log("error");
        console.log(error);
    }
}
