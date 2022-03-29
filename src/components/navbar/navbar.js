import * as React from "react";
import { useHistory,useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Popover } from 'react-tiny-popover';
import CustomToast from "../utils/customToast";
import { toastType } from "../../constants";

const Navbar=()=>{
    const store=useSelector(store=>store.authReducer);

    const history = useHistory();
    const location=useLocation();
    const pathName=location.pathname;

    const [isPopoverOpen,setIsPopoverOpen]=React.useState(false);
    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })

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
            path:"/about-us",
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
            path:"/contact-us",
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
            visible:pathName==='/login'?false:true,
            class:pathName==='/register'?"action-btn-border":"action-btn",
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
            visible:pathName==='/register'?false:true,
            class:pathName==='/login'?"action-btn-border":"action-btn-bg"
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

    const handleLogout=()=>{
        setIsPopoverOpen(!isPopoverOpen)
        
        let currentNav=[...navList];
        currentNav.forEach(nav=>nav.active=false);
        setNavList(currentNav);

        setInfo({
            ...info,
            show:1,
            message:"Logged out.",
            type:toastType.info,               
        })
        history.push("/logout")
    }

    const handleUserManagementClick=()=>{
        setIsPopoverOpen(!isPopoverOpen)

        let currentNav=[...navList];
        currentNav.forEach(nav=>nav.active=false);
        setNavList(currentNav);

        if(!store.user?.status){
            setInfo({
                show:1,
                message:"Your account is not approved yet!",
                type:toastType.info
            })
        }else if(store.user?.subscription_plan==1){
            setInfo({
                show:1,
                message:"You have to subscribe to access this module!",
                type:toastType.info
            })
        }else{
            history.push(`/user-management`);
        }
    }

    const UserPopoverUI=()=>{
        return(
            <div className="profile-popover-main">
                <div className="pp-button-div-1">
                    <a href="#" onClick={handleUserManagementClick}>User Management</a>
                </div>
                <div className="pp-button-div-2">
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        )
    }
    
    return (
        <>
            <CustomToast info={info}/>
            <nav id="main-nav-id" className="main-nav">
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
               { !store.isAuth?
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
                    </div>:

                    <div className="action-lists">
                            
                        <div>
                            {store.user.name}
                        </div>
                        <Popover
                            isOpen={isPopoverOpen}
                            positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                            content={< UserPopoverUI/>}
                            >
                                <div className="profile-div" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                                    <img src={store?.user?.profile_pic_url || require('../../assets/images/profile_avtar.jpg')} alt=""/>
                                </div>
                            </Popover>
                    </div>
                }
            </nav>
        </>
    )
}



export default Navbar;