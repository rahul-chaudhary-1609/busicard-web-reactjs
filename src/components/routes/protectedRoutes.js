import * as React from "react";
import { Route } from "react-router-dom";
import Loader from "../utils/loader";




const ProtectedRoutes=(props)=>{
    return(
        <React.Suspense fallback={<Loader/>}>
            <Route exact path={props.path} component={props.component}/>
        </React.Suspense>
    )
}

export default ProtectedRoutes;

