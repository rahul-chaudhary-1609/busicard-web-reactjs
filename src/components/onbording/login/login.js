import * as React from "react";
import '../../../assets/css/bootstrap.css';

const Login=()=>{
    return (
        <div className="home-bg">
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
                            <form className="login-form" autoComplete="nope">
                                <div className="input-group mb-15">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input type="password" className="form-control border-right-0 custom-input-1" placeholder="password" autoComplete="nope"/>
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
                                    <button className="action-btn-bg">LOGIN</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login;