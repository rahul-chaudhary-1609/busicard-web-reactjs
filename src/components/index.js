import * as React from "react";
import Navbar from "./navbar/navbar.js";
import '../assets/css/bootstrap.css';
import "../assets/css/styles.css"
import Routes from "./routes/routes.js";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main =()=>{
    return(
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <Navbar/>
            <Routes/>
        </>
    )
}


export default Main;