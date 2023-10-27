import axios from "axios";
import { IAction } from "../types";

export const GET_ACTIONS = "GET_ACTIONS";
export const EDIT_ACTIONS = "EDIT_ACTIONS";

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