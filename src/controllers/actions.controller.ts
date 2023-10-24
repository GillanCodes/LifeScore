import { Request, Response } from "express";
import log from "../../log";
import actionModel from "../../models/action.model";

export const createAction = (req:Request, res:Response) => {
    try {
        
        const {title, description, type} = req.body;
        actionModel.create({
            title,
            description,
            type
        }).then((data) => {
            return res.status(201).send(data);
        }).catch((error) => {
            log (error, "error");
        })
    } catch (error:any) {
        log(error, "error");
    }
}

export const editAction = (req:Request, res:Response) => {
    
}

export const deleteAction = (req:Request, res:Response) => {
    
}
