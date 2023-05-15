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
export default IUser
