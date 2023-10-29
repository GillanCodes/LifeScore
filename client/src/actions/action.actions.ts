import axios from "axios";
import { IAction } from "../types";
import { type } from "os";

export const GET_ACTIONS = "GET_ACTIONS";
export const EDIT_ACTIONS = "EDIT_ACTIONS";
export const ADD_ACTION = "ADD_ACTION";

export const getActions = () => {
    return (dispatch:any) => {
        return axios({
            method:"get",
            url:`${process.env.REACT_APP_API_URL}/action/`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: GET_ACTIONS, payload: res.data});
        }).catch((err) => {
            console.log(err);
        });
    };
};

export const editActions = (currentAction:IAction) => {
    return (dispatch:any) => {
        return axios({
            method:"patch",
            url:`${process.env.REACT_APP_API_URL}/action/${currentAction._id}`,
            withCredentials:true,
            data: currentAction
        }).then((res) => {
            dispatch({type: EDIT_ACTIONS, payload: res.data});
        }).catch((err) => {
            console.log(err);
        });
    };
}
export const updateActions = (id:string) => {
    return (dispatch:any) => {
        return axios({
            method:"put",
            url:`${process.env.REACT_APP_API_URL}/action/${id}`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: EDIT_ACTIONS, payload: res.data});
        }).catch((err) => {
            console.log(err);
        });
    };
}

export const newAction = () => {
    return(dispatch:any) => {
        return axios({
            method: "POST",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/action/`,
            data: {
                title: "New Card",
                description: `Card created on ${new Date()}`,
                type: "counter"
            }
        }).then((res) => {
            dispatch({type: ADD_ACTION, payload: res.data});
        }).catch((err) => {
            console.log(err);
        })
    }
}