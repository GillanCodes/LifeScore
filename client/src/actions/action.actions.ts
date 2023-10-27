import axios from "axios";

export const GET_ACTIONS = "GET_ACTIONS";

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