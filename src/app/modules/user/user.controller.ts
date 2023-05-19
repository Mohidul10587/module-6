
import { NextFunction, Request, Response } from 'express';
import { createUserToDb, getUserByIdFromDb, getUsersFromDb } from './user.service';
import { IUser } from './user.interface';


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    console.log('This is my data', data)
    const user = await createUserToDb(data);
    res.status(200).json({
        status: 'success',
        data: user,
    })
}

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<IUser[]> => {

    const user = await getUsersFromDb();
    return user;
}

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<IUser | null> => {
    const {id}  = req.params
    const user = await getUserByIdFromDb(id);
    return user;
}