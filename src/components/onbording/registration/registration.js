import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Registraion=()=>{
    return (
        <div className="home-bg">
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
                            <form className="register-form" autoComplete="off">
                                <div className="input-group custom-input-div-1">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Name" autoComplete="off"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/name_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group custom-input-div-1">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Name of the company" autoComplete="off"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/c_name_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group custom-input-div-1">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Number of user requested" autoComplete="off"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/group_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group custom-input-div-1">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete={"off"}/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group custom-input-div-1">
                                    <input type="password" className="form-control border-right-0 custom-input-1" placeholder="Add password" autoComplete="off"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group custom-input-div-1">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Confirm Password" autoComplete="off"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group">
                                    <button className="action-btn-bg">Register</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Registraion;