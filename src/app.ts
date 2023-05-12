import express, { Application, Request, Response } from "express";
import cors from "cors"
import { Schema } from "mongoose";


const app: Application = express();
//Using Cors
app.use(cors())

// Parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/', (req: Request, res: Response) => {
    //Inserting Data in MongoDB

    /*
     * Step - 1 : interface
    * Step - 2 : Schema;
    * Step - 3 : Model 
    * Step -4 : Database Query 
*/


    // * Creating A Interface 
    interface IUser {
        id: string;
        role: " Student"
        password: string
        name: {
            firstName: string;
            lastName: string
        }
        DOB?: string;
        gender: "male" | "female"
        email?: string;
        contactNo: number;
        address?: string
    }


    // * Creating Schema 

    const userSchema = new Schema<IUser>({
        name: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }
        },
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        DOB: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: true
        },
        email: {
            type: String,
            required: false
        },
        contactNo: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: false
        },
    })

    res.send('Hello World!')
})

export default app;
