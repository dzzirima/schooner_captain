
interface IUser{
    
    userId?: string | null |number
    displayName:string,
    firstName: string,
    lastName: string,
    email:string,
    password:string,
    photoURL?:string
}

export type TUser={
    
    userId?: string | null |number
    displayName:string,
    email:string,
    password:string,
    photoURL?:string
}


export default IUser;