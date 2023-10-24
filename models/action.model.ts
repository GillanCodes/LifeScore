import { Schema, model } from "mongoose";

export interface IAction {
    title: string,
    description: string,
    color: string,
    image:string,
    type: string, 
    recurrence: string,
    time:string,
    counter:number,
}

const actionSchema = new Schema<IAction>({
    title:          {type:String, required:true, maxlength:64},
    description :   {type:String, maxlength:255},
    color:          {type: String, default: "#FEFEFE"},
    image:          {type:String, default: "default_banner.png"},
    type:           {type: String, required: true},
    recurrence:     {type: String},
    time:           {type: String},
    counter:        {type: Number},
});

const actionModel = model("actions", actionSchema);
export default actionModel;