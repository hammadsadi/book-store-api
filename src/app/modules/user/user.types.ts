export type TUser ={
    userName:string,
    email:string
    password:string
    profileImage:string
    role:'Admin' | "User" | "SuperAdmin"
}