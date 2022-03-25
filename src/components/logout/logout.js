import * as React from "react";
import { useHistory } from "react-router-dom";


const Logout=()=>{
    const history=useHistory();
    history.push('/home')
    return (<></>)
}

export default Logout;