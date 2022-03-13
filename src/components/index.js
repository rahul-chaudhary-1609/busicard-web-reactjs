import * as React from "react";
import Navbar from "./navbar/navbar.js";
import "../assets/css/style.css"
import Routes from "./routes/routes.js";
import Loader from "./utils/loader.js";



const Main =()=>{
    return(
        <>
            <Navbar/>
            <Routes/>
            {/* <Loader/> */}
        </>
    )
}


export default Main;