import * as React from "react";
import Navbar from "./navbar/navbar.js";
import '../assets/css/bootstrap.css';
import "../assets/css/styles.css"
import Routes from "./routes/routes.js";
import Loader from "./utils/loader.js";
import CustomToast from "./utils/customToast.js";




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