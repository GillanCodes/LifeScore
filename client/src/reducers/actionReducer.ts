import { ADD_ACTION, EDIT_ACTIONS, GET_ACTIONS } from "../actions/action.actions";
import { IAction } from "../types";

const initialState:object = {};

export default function actionsReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_ACTIONS:
            return action.payload;
        case EDIT_ACTIONS:
            return state.map((uAction:IAction) => {
                if (uAction._id === action.payload._id)
                {
                    return action.payload;
                } else return uAction;
            });
        case ADD_ACTION:
            return [...state, action.payload];
        default:
            return state;
    }
}