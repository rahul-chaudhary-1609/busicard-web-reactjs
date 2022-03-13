import * as React from "react";


const Loader=()=>{
    return (
        <div className="home-bg loader">
            <div className="loader-img">
                <img src={require("../../assets/images/logo_icon.png")} alg="loading..."/>
            </div>
            <div>
                Loading...
            </div>
        </div>
    )
}

export default Loader;