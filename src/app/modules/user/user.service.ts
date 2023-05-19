import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payLoad: IUser): Promise<IUser> => {
  console.log('hit to createUserToDb and' , payLoad )
  const user = new User(payLoad);
  await user.save();
  return user
}


export const getUsersFromDb = async (): Promise<IUser[]>  => {
  console.log('hit to getUsersFromDb')
  const users = User.find();
  return users
}

export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
  console.log('hit to getUserByIdFromDb and' , payload )
  const user = User.findOne({ id: payload });
  return user
}