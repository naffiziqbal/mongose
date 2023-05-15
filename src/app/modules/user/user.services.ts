import { User } from "./user.model"

export const createUserToDB = async () => {
    const user = await new User({
        id: "S",
        role: " Student",
        password: "98907",
        name: {
            firstName: "Tanvir",
            lastName: "Iqbal",
        },
        DOB: "30 oct 2001",
        gender: "male",
        email: "nafiz@gmail.com",
        contactNo: 4880,
        address: "Dhala"
    })
}
