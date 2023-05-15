import { Schema, model } from "mongoose"
import IUser from "./user.interface"

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
export const User = model<IUser>("user", userSchema)
