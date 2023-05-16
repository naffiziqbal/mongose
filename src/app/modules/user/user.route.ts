import express, { Router } from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const router = express.Router()

router.get('/users', getUsers)
router.get('/user/:id', getUserById)
router.post('/create-user', createUser)

export default router
