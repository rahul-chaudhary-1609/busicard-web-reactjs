import * as React from "react";
import { apiPostRequest } from "../../../api";
import { apiConstants, toastType } from "../../../constants";
import { useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import CustomToast from "../../utils/customToast";
import CustomErrorHandler from "../../utils/customErrorHandler";


const ForgotPasswrod=()=>{

    const store=useSelector(store=>store.authReducer);
    const history=useHistory();

    if(store.isAuth){
        history.push("/home")
    }

    const [user,setUser]=React.useState({
        email:"",
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



    const handleSend=(e)=>{
        e.preventDefault();
        setLoading(true);
        let data={
            endPoint:apiConstants.forgotPassword,
            body:{
                email:user.email,
            }
        }

        
        apiPostRequest(store.user.token,data)
        .then((response)=>{
            setLoading(false);

            setInfo({
                ...info,
                show:1,
                message:response.message,
                type:toastType.success,               
            })

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
                            <h2>Forget Passwrod!</h2>
                            <p>Enter your email to receive reset password link</p>
                        </div>
                        <div>
                            <form action="#" className="login-form" autoComplete="nope" onSubmit={handleSend}>
                                <div className="input-group mb-15">
                                    <input id="email" value={user.email} onChange={handleInputChange} type="text" className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group">
                                    <button disabled={loading} type="submit" className="action-btn-bg">SEND</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswrod;