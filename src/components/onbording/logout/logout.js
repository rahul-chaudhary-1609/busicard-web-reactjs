import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";




const Logout=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    React.useEffect(()=>{
        dispatch(logout())
        history.push('/login')
    })
    return (<></>)
}

export default Logout;