import * as React from "react";
import { apiPostRequest } from "../../../api";
import { apiConstants, toastType } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomToast from "../../utils/customToast";
import { login } from "../../redux/actions";

const Login=()=>{

    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    const dispatch=useDispatch();

    if(store.isAuth){
        history.push("/home")
    }

    const [user,setUser]=React.useState({
        email:"",
        password:"",
    })

    const [loading, setLoading]=React.useState(false);
    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })

    const handleInputChange=(e)=>{
        user[e.target.id]=e.target.value;
        setUser({...user})
    }



    const handleLogin=(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log("user",user)
        let data={
            endPoint:apiConstants.signIn,
            body:{
                username:user.email,
                password:user.password,
            }
        }

        console.log("data",data)
        
        apiPostRequest(store.user.token,data)
        .then((response)=>{
            console.log("Response",response)
            setLoading(false);
            let payload={
                user:{
                    ...response.body.data
                }
            }

            setInfo({
                ...info,
                show:1,
                message:response.message,
                type:toastType.success,               
            })

            dispatch(login(payload))

            history.push("/home")
        })
        .catch((error)=>{
            console.error("Error==>",error)
            setLoading(false);
            if(error?.message){
                setInfo({
                    ...info,
                    show:1,
                    message:error.message,
                    type:toastType.error,               
                })
            }else{
                setInfo({
                    ...info,
                    show:1,
                    message:"Something went wrong",
                    type:toastType.error,               
                })
            }
        })
    }

    return (
        <div className="home-bg">
        <CustomToast info={info}/>
            <div className="login-main">
                <div className="login-left-image-div mt-80">
                        <div>
                            <img src={require('../../../assets/images/onboarding_img.png')} alt=""/>
                        </div>
                </div>
                <div className="login-form-div mt-80">
                        <div>
                            <h2>Hello Again!</h2>
                            <p>Welcome back. Enter your credentials</p>
                        </div>
                        <div>
                            <form action="#" className="login-form" autoComplete="nope" onSubmit={handleLogin}>
                                <div className="input-group mb-15">
                                    <input id="email" value={user.email} onChange={handleInputChange} type="text" className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="password" value={user.password} onChange={handleInputChange}  type="password" className="form-control border-right-0 custom-input-1" placeholder="password" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="forgot-pwd-div">
                                    Forgot password?
                                </div>
                                <div className="input-group">
                                    <button disabled={loading} type="submit" className="action-btn-bg">LOGIN</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login;