import {actions} from "../../../constants";


export const login=(payload)=>{
    return {
        type:actions.LOGGED_IN,
        payload,
    }
}


export const logout=(payload)=>{
    return {
        type:actions.LOGGED_OUT,
        payload,
    }
}