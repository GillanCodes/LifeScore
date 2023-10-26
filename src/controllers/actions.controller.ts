import { Request, Response } from "express";
import log from "../../log";
import actionModel from "../../models/action.model";
import { isValidObjectId } from "mongoose";

export const getActions = async (req:Request, res:Response) => {

   try {
        const actions = await actionModel.find({ownerId: res.locals.user.id});
        return res.status(200).send(actions);
   } catch (error) {
    
   } 

}

export const getAction = async (req:Request, res:Response) => {
    
    try {
        const {id} = req.params;
        if (!isValidObjectId(id)) log("not valid id getsoloaction", 0);
        const action = await actionModel.findById(id)
        return res.status(200).send(action);
    } catch (error) {
        
    }
}

export const createAction = (req:Request, res:Response) => {
    try {
        
        const {title, description, type} = req.body;
        actionModel.create({
            ownerId:res.locals.user.id,
            title,
            description,
            type,
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
    try {
        
        const {id} = req.params;
        if (!isValidObjectId(id)) log("id not valid updateAction", "debug");
        const {title, description, type, color, recurrence, time, counter, step} = req.body
        actionModel.findByIdAndUpdate(id, {
            $set: {
                title,
                description,
                type,
                color,
                recurrence,
                time,
                counter,
                step,
            }
        }, {new: true, upsert: true}).then((data) => {
            return res.status(201).send(data);
        }).catch((error) => {
            log (error, "error");
        })
    } catch (error:any) {
       log(error, "error"); 
    }
}

export const deleteAction = async (req:Request, res:Response) => {

    try {
        const {id} = req.params;
        var action = await actionModel.deleteOne({_id: id});
        return res.status(201).send({id});
    } catch (error:any) {
        log(error, "error");
    }

}

export const updateAction = async (req:Request, res:Response) => {

    try {
        
        const {id} = req.params;
        if (!isValidObjectId(id)) log('Error, not valid id updateAction', 3);
        const action = await actionModel.findById(id);

        switch (action?.type) {
            case "counter":
                var count = action.counter + action.step;
                actionModel.findByIdAndUpdate(id, {
                    $set: {
                        counter: count
                    }
                }, {upsert: true, new:true}).then((data) => {
                    return res.status(201).send(data);
                }).catch((err) => log(err, 0));
                break;
            default:
                break;
        }

    } catch (error:any) {
       log(error, 0); 
    }

}
