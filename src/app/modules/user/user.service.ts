import { IUser } from "./user.interface";
import  User  from "./user.model";

export const createUserToDb =async (payLoad:IUser) :Promise<IUser>=>{
    const user =  new User( payLoad);
    await user.save();
    return user
  }


  export const getUsersFromDb =async ()=>{
   const users = User.find() ;
   return users
  }

  export const getUserByIdFromDb =async (payload:string)=>{
    console.log(payload)
    const user = User.findOne({id:payload}) ;
    return user
   }