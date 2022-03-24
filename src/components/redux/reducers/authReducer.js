
import {actions} from "../../../constants";

let initialState={
    isAuth:0,
    user:{},
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case actions.LOGGED_IN:
            return {...state, isAuth:1, user:action.payload.user,};
        case actions.LOGGED_OUT:
            return {...state, isAuth:0, user:{}}
        default:
            return state
    }
}

export default authReducer;