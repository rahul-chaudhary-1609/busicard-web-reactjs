import * as React from "react";
import { apiPostRequest } from "../../../api";
import { apiConstants, customTheme, toastType } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomToast from "../../utils/customToast";
import { login } from "../../redux/actions";
import Pricing from "../../pricing/pricing.js"
import CustomErrorHandler from "../../utils/customErrorHandler";



const Registraion=()=>{
    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    const dispatch=useDispatch();

    if(store.isAuth){
        history.push("/home")
    }

    const [user,setUser]=React.useState({
        name:"",
        companyName:"",
        userCount:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [loading, setLoading]=React.useState(false);
    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })

    React.useEffect(()=>{
        let pricingElement=document.getElementById("pricing-main-div");
        let pricingHeadElement=document.getElementById("pricing-main-heading");
        let pricingHeadTextElement=document.getElementById("pricing-main-text");
        pricingElement.classList.remove('home-bg')
        pricingHeadElement.style.color=customTheme.colors.theme_color_2;
        pricingHeadTextElement.style.color=customTheme.colors.theme_color_4;
        return ()=>{
            pricingElement.classList.add('home-bg')
            pricingHeadElement.style.color=customTheme.colors.theme_color_1;
            pricingHeadTextElement.style.color=customTheme.colors.theme_color_1;
        }
    })

    const handleInputChange=(e)=>{
        user[e.target.id]=e.target.value;
        setUser({...user})
    }


    const validateData=()=>{
        let result=true;

        if(user.password!==user.confirmPassword){
            result=false;
            setInfo({
                ...info,
                show:1,
                message:"Password and confirm password should be same",
                type:toastType.error,               
            })
        }

        if(isNaN(user.userCount) || parseInt(user.userCount)<1){
            result=false;
            setInfo({
                ...info,
                show:1,
                message:"Number of user should be a valid number greater than 0;",
                type:toastType.error,               
            })
        }else{
            user.userCount=parseInt(user.userCount);
            setUser({...user});
        }

        return result;
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        setLoading(true);
        if(!validateData()){
            setLoading(false);
            return;
        }
        console.log("user",user)
        let data={
            endPoint:apiConstants.signUp,
            body:{
                name:user.name,
                email:user.email,
                number_of_users:user.userCount,
                password:user.password,
                confirm_Password:user.confirmPassword,
                company_name:user.companyName
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

            dispatch(login(payload))

            setInfo({
                ...info,
                show:1,
                message:response.message,
                type:toastType.success,               
            })

            history.push("/home")
        })
        .catch((error)=>{
            console.error("Error==>",error)
            setLoading(false);
            CustomErrorHandler(error,history);
        })
    }
    


    return (<>
        <div className="home-bg">
            <CustomToast info={info}/>
            <div className="register-main">
                <div className="register-left-image-div mt-80">
                        <div>
                            <img src={require('../../../assets/images/onboarding_img.png')} alt=""/>
                        </div>
                </div>
                <div className="register-form-div mt-80">
                        <div>
                            <h2>Hey there!</h2>
                            <p>Let's get started by creating your account</p>
                        </div>
                        <div>
                            <form action="#" className="register-form" autoComplete="nope" onSubmit={handleRegister}>
                                <div className="input-group mb-15">
                                    <input id="name" value={user.name} onChange={handleInputChange} type="text" className="form-control border-right-0 custom-input-1" placeholder="Name" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/name_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="companyName" value={user.companyName} onChange={handleInputChange} type="text" className="form-control border-right-0 custom-input-1" placeholder="Name of the company" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/c_name_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="userCount" value={user.userCount} onChange={handleInputChange} type="text"  className="form-control border-right-0 custom-input-1" placeholder="Number of user requested" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/group_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="email" value={user.email} onChange={handleInputChange} type="text"  className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="password" value={user.password} onChange={handleInputChange}  type="password" className="form-control border-right-0 custom-input-1" placeholder="Add password" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input id="confirmPassword" value={user.confirmPassword} onChange={handleInputChange} type="password"  className="form-control border-right-0 custom-input-1" placeholder="Confirm Password" autoComplete="nope" required/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group">
                                    <button disabled={loading} type="submit" className="action-btn-bg">REGISTER</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        <Pricing/> 
        </>
    )
}

export default Registraion;