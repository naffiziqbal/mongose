import mongoose from "mongoose";
import app from "./app";

const port = 5000

//Databse Conenction

async function main() {

    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log("Database Connnection Successful");

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    }
    catch(err){
        console.log(err)
    }
}
main()

