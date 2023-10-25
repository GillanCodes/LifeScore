import {Request, Response} from "express";
import log from "../../log";
import { isValidObjectId } from "mongoose";
import userModel from "../../models/user.model";

export const getUser = async (req:Request, res:Response) => {

    try {
        
        const {id} = req.params;
        if (!isValidObjectId) log("not valid id userGet", 4);

        const user = await userModel.findById(id);
        return res.status(201).send(user);

    } catch (error:any) {
        log(error, 0);
    }

}