import express, { Application } from "express";
import cors from "cors"
import userRoute from "./app/modules/user/user.route"


const app: Application = express();
//Using Cors
app.use(cors())

// Parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



// app.get('/api/v1/user', userRoute)
app.use("/api/v1/user", userRoute)

export default app;
