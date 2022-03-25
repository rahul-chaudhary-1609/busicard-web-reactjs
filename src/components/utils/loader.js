import * as React from "react";


const Loader=()=>{
    return (
        <div className="loader">
            <div className="loader-img">
                <img src={require("../../assets/images/logo_icon.png")} alt="loading..."/>
            </div>
            <div>
                Loading...
            </div>
        </div>
    )
}

export default Loader;