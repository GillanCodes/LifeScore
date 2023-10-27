import { GET_ACTIONS } from "../actions/action.actions";

const initialState:object = {};

export default function actionsReducer(state = initialState, action:any)
{
    switch(action.type)
    {
        case GET_ACTIONS:
            return action.payload;
        default:
            return state;
    }
}