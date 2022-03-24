import * as React from "react";
import { useHistory,useLocation,useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Popover } from 'react-tiny-popover';
import { logout } from "../redux/actions/index.js";


const Navbar=()=>{
    const store=useSelector(store=>store.authReducer);
    const dispatch=useDispatch();

    const history = useHistory();
    const location=useLocation();
    const pathName=location.pathname;

    const [isPopoverOpen,setIsPopoverOpen]=React.useState(false);

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

    const handleLogout=()=>{
        dispatch(logout({user:{}}))
        history.push("/login")
    }

    const UserPopoverUI=()=>{
        return(
            <div className="profile-popover-main">
                <div className="pp-button-div-1">
                    <a href="#">User Management</a>
                </div>
                <div className="pp-button-div-2">
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        )
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
                                <div className="profile-div" onClick={() => {
                                    console.log("Popoverjjikn")
                                    setIsPopoverOpen(!isPopoverOpen);
                                }}>
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