
interface IUser{
    
    userId?: string | null |number
    displayName:string,
    email:string,
    password:string,
    photoURL?:string
}

export default IUser;