import * as React from "react";
import { apiPostRequest } from "../../../api";
import { apiConstants, toastType } from "../../../constants";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import CustomToast from "../../utils/customToast";
import CustomErrorHandler from "../../utils/customErrorHandler";

const ResetPasswrod=()=>{

    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    const location=useLocation();
    const params = new Proxy(new URLSearchParams(location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });


    if(store.isAuth){
        history.push("/home")
    }

    const [user,setUser]=React.useState({
        password:"",
        confirmPassword:"",
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
            endPoint:apiConstants.resetPassword,
            body:{
                password:user.password,
                confirm_Password:user.confirmPassword,
            }
        }

        console.log("data",data)
        
        apiPostRequest(params.token,data)
        .then((response)=>{
            console.log("Response",response)
            setLoading(false);

            setInfo({
                ...info,
                show:1,
                message:response.message,
                type:toastType.success,               
            })

            history.push("/login")
        })
        .catch((error)=>{
            console.error("Error==>",error)
            setLoading(false);
            CustomErrorHandler(error,history);
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
                            <h2>Reset Passwrod!</h2>
                            <p>Set new password.</p>
                        </div>
                        <div>
                            <form action="#" className="login-form" autoComplete="nope" onSubmit={handleLogin}>
                                <div className="input-group mb-15">
                                    <input id="password" value={user.password} onChange={handleInputChange} type="password" className="form-control border-right-0 custom-input-1" placeholder="Password" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="confirmPassword" value={user.confirmPassword} onChange={handleInputChange}  type="password" className="form-control border-right-0 custom-input-1" placeholder="Confirm Password" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group">
                                    <button disabled={loading} type="submit" className="action-btn-bg">SAVE</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswrod;