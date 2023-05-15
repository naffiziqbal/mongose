import { Request, Response } from "express";
import { createUserToDB } from "./user.services";

export const createUser = async(req: Request, res: Response) => {

    const  user = await  createUserToDB
    

}
