import { Request, Response } from "express";
import { createUserToDB, getUserByIdFromDb, getUsersFromDB } from "./user.services";

export const createUser = async (req: Request, res: Response) => {

    const data = req.body;
    const user = await createUserToDB(data)
    res.status(200).json({
        status: "Satisfied",
        data: user
    })
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersFromDB()
    res.status(200).json({
        status: "Satisfied",
        data: users
    })
}

export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await getUserByIdFromDb(id)
    res.status(200).json({
        status: "Satisfied",
        data: user
    })

}
