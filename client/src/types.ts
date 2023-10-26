export interface IUser extends Document {
    username: string,
    password: string,
    email: string
}

export interface IAction {
    ownerId:string
    title: string,
    description: string,
    color: string,
    image:string,
    type: string, 
    recurrence: string,
    time:string,
    counter:number,
    step:number,
}