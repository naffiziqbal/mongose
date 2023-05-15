import express, { Application, Request, Response } from "express";
import cors from "cors"
import { User } from "./app/modules/user/user.model";


const app: Application = express();
//Using Cors
app.use(cors())

// Parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/', )

export default app;
