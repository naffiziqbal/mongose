import { User } from "./user.model"


export const createUserToDB = async() => {
    const user = await new User({
        id: "54545",
        role: " Mafia",
        password: "98907",
        name: {
            firstName: "Jemmy",
            lastName: "Brown",
        },
        DOB: "30 oct 2001",
        gender: "male",
        email: "nafiz@gmail.com",
        contactNo: 4880,
        address: "Dhala"
    })
    await user.save()
    return user
}
