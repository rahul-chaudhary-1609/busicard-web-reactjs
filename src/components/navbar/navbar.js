import * as React from "react";
import { useHistory,useLocation,useParams } from 'react-router-dom';


const Navbar=()=>{

    const history = useHistory();
    const location=useLocation();
    const pathName=location.pathname;
    const params=useParams();
    console.log("location=====>",history,location,params)
    const [navList,setNavList]=React.useState([
        {
            id:1,
            title:"Home",
            path:"/home",
            active:pathName==="/home"?true:false,
        },
        {
            id:2,
            title:"About Us",
            path:"/aboutus",
            active:pathName==="/aboutus"?true:false,
        },
        {
            id:3,
            title:"Category",
            path:"/category",
            active:pathName==="/category"?true:false,
        },
        {
            id:4,
            title:"Contact Us",
            path:"/contactus",
            active:pathName==="/contactus"?true:false,
        },
        {
            id:5,
            title:"Pricing",
            path:"/pricing",
            active:pathName==="/pricing"?true:false,
        }
    ])
    
    const actionList=[
        {
            id:1,
            title:"Already a member?",
            visible:pathName==='/register'?true:false,
            class:"action-txt"
        },
        {
            id:2,
            title:"LOGIN",
            path:"/login",
            visible:pathName==='/' || pathName==='/home' || pathName==='/register'?true:false,
            class:pathName==='/' || pathName==='/home'?"action-btn":"action-btn-border",
        },
        {
            id:3,
            title:"Not registered yet?",
            visible:pathName==='/login'?true:false,
            class:"action-txt"
        },
        {
            id:4,
            title:"REGISTER",
            path:"/register",
            visible:pathName==='/' || pathName==='/home' || pathName==='/login'?true:false,
            class:pathName==='/' || pathName==='/home'?"action-btn-bg":"action-btn-border"
        }
    ]

    const handleNavMenuClick=(item,index)=>{
        let currentNav=[...navList];
        currentNav.forEach(nav=>nav.active=false);
        currentNav[index].active=true;
        setNavList(currentNav);
        history.push(item.path);
    }

    const handleActionClick=(item,index)=>{
        let currentNav=[...navList];
        currentNav.forEach(nav=>nav.active=false);
        setNavList(currentNav);
        history.push(item.path);
    }
    
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                        <div>
                            <span>BusiCard</span>
                        </div>
                        <div>
                            <img src={require("../../assets/images/logo_icon.png")} alt="logo"/>
                        </div>
                </div>
                <div className="nav-lists">
                    <ul>
                        {navList.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <button 
                                        className={item.active?"nav-lists-li-active":"nav-lists-li-inactive"}
                                        onClick={()=>handleNavMenuClick(item,index)}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="action-lists">
                        {actionList.filter(item=>item.visible).map((item,index)=>{
                            return(
                                <div key={index}>
                                    {
                                        item.path?(
                                            <button
                                                className={item.class}
                                                onClick={()=>handleActionClick(item,index)}
                                            >
                                                {item.title}
                                            </button>
                                        ):(
                                            <span className={item.class}>
                                                {item.title}
                                            </span>
                                        )
                                    }
                                </div>
                            )
                        })}
                </div>
            </nav>
        </>
    )
}

export default Navbar;