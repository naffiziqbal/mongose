import express, { Router } from "express";
import { createUser, getUsers } from "./user.controller";

const router = express.Router()

router.get('/users', getUsers)
router.post('/create-user', createUser)

export default router
