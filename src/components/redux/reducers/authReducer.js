
import {actions} from "../../../constants";

let initialState={
    isAuth:0,
    user:{},
    selectedSubscription:null,
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case actions.LOGGED_IN:
            return {...state, isAuth:1, user:action.payload.user,selectedSubscription:null,};
        case actions.LOGGED_OUT:
            return {...state, isAuth:0, user:{},selectedSubscription:null,}
        case actions.SELECT_SUBSCRIPTION:
            return {...state, selectedSubscription:action.payload,}
        case actions.UPDATE_USER_DATA:
            return {...state, user:action.payload.user}
        default:
            return state
    }
}

export default authReducer;