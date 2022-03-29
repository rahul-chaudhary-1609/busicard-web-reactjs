import {actions} from "../../../constants";


export const login=(payload)=>{
    return {
        type:actions.LOGGED_IN,
        payload,
    }
}


export const logout=()=>{
    return {
        type:actions.LOGGED_OUT,
    }
}


export const selectSubscription=(payload)=>{
    return {
        type:actions.SELECT_SUBSCRIPTION,
        payload,
    }
}

export const updateUserData=(payload)=>{
    return {
        type:actions.UPDATE_USER_DATA,
        payload,
    }
}