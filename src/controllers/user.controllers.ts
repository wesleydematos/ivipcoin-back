import {iUserRegister} from "../interfaces"
import {registerUserService} from "../services"

import {Request, Response} from "express"

const registerUserController = async (req: Request, res: Response) => {
    const userData: iUserRegister = req.body;
    const newUser = await registerUserService(userData);
    return res.status(201).json(newUser);
}

export {registerUserController}