import * as React from "react";
import { apiPostRequest } from "../../../api";
import { apiConstants, toastType } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomToast from "../../utils/customToast";
import { login } from "../../redux/actions";
import CustomErrorHandler from "../../utils/customErrorHandler";



const VerifyOTP=(props)=>{
    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    const dispatch=useDispatch();

    if(store.isAuth){
        history.push("/home")
    }

    const [autoFocus,setAutoFocus]=React.useState({
        otp_1:true,
        otp_2:false,
        otp_3:false,
        otp_4:false,
    })

    const [OTP,setOTP]=React.useState({
        otp_1:"",
        otp_2:"",
        otp_3:"",
        otp_4:"",
    });

    let [resendCounter,setResendCounter]=React.useState(60);

    const [loading, setLoading]=React.useState(false);
    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })

    React.useEffect(() => {
        const timer =
        resendCounter > 0 && setInterval(() => setResendCounter(resendCounter - 1), 1000);
        return () => clearInterval(timer);
    }, [resendCounter]);

    React.useEffect(()=>{

    },[autoFocus])

    const handleInputChange=(e)=>{
        if(e.target.id==="otp_1"){
            if(!isNaN(e.target.value)){
                let currentOTP=e.target.value;
                if(currentOTP.length<2){
                    OTP.otp_1=currentOTP
                    setAutoFocus({
                        otp_1:false,
                        otp_2:true,
                        otp_3:false,
                        otp_4:false,
                    })
                }
            }
        }else if(e.target.id==="otp_2"){
            if(!isNaN(e.target.value)){
                let currentOTP=e.target.value;
                if(currentOTP.length<2){
                    OTP.otp_2=currentOTP
                    if(currentOTP.length<1){
                        setAutoFocus({
                            otp_1:true,
                            otp_2:false,
                            otp_3:false,
                            otp_4:false,
                        })
                    }else{
                        setAutoFocus({
                            otp_1:false,
                            otp_2:false,
                            otp_3:true,
                            otp_4:false,
                        })
                    }
                }
            }
        }else if(e.target.id==="otp_3"){
            if(!isNaN(e.target.value)){
                let currentOTP=e.target.value;
                if(currentOTP.length<2){
                    OTP.otp_3=currentOTP
                    if(currentOTP.length<1){
                        setAutoFocus({
                            otp_1:false,
                            otp_2:true,
                            otp_3:false,
                            otp_4:false,
                        })
                    }else{
                        setAutoFocus({
                            otp_1:false,
                            otp_2:false,
                            otp_3:false,
                            otp_4:true,
                        })
                    }
                }
            }
        }else if(e.target.id==="otp_4"){
            if(!isNaN(e.target.value)){
                let currentOTP=e.target.value;
                if(currentOTP.length<2){
                    OTP.otp_4=currentOTP
                    if(currentOTP.length<1){
                        setAutoFocus({
                            otp_1:false,
                            otp_2:false,
                            otp_3:true,
                            otp_4:false,
                        })
                    }
                }
            }
        }

        setOTP({...OTP})
        
    }


    const handleResend=()=>{
        if(!resendCounter){
            setResendCounter(10)

            let data={
                endPoint:apiConstants.resendOtp,
                body:{
                    email:props.email,
                }
            }

            apiPostRequest(store.user.token,data)
            .then((response)=>{
                setLoading(false);

                setInfo({
                    ...info,
                    show:1,
                    message:`Email verification code resent on ${props.email}`,
                    type:toastType.success,               
                })
            })
            .catch((error)=>{
                setLoading(false);
                CustomErrorHandler(error,history);
            })
        }        
    }

    const handleVerify=(e)=>{
        e.preventDefault();
        setLoading(true);
        let data={
            endPoint:apiConstants.verifyOtp,
            body:{
                email:props.email,
                otp:Object.values(OTP).join("")
            }
        }


        apiPostRequest(store.user.token,data)
        .then((response)=>{
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
            setLoading(false);
            CustomErrorHandler(error,history);
        })
    }
    


    return (
        <>
            <CustomToast info={info}/>
            <div className="register-form-div mt-80">
                    <div>
                        <h2>Verify OTP!</h2>
                        <p>Enter OTP recieved on your email</p>
                    </div>
                    <div>
                        <form action="#" className="register-form" autoComplete="nope" onSubmit={handleVerify}>
                            <div className="vo-main-div">
                                <input autoFocus={autoFocus.otp_1} id="otp_1" value={OTP.otp_1} onChange={handleInputChange} type="text" required/>
                                <input autoFocus={autoFocus.otp_2} id="otp_2" value={OTP.otp_2} onChange={handleInputChange} type="text" required/>
                                <input autoFocus={autoFocus.otp_3} id="otp_3" value={OTP.otp_3} onChange={handleInputChange} type="text" required/>
                                <input autoFocus={autoFocus.otp_4} id="otp_4" value={OTP.otp_4} onChange={handleInputChange} type="text" required/>
                            </div>
                            <div className="resend-counter">
                                <span>{resendCounter}</span>
                                <a href="#" disabled={resendCounter} className={resendCounter?"resend-disabled-btn":"resend-btn"} onClick={handleResend}>Resend</a>
                            </div>
                            <div className="input-group">
                                <button disabled={loading} type="submit" className="action-btn-bg">VERIFY</button>
                            </div>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default VerifyOTP;