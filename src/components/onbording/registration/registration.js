import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../assets/css/bootstrap.css';


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
                            <form className="register-form" autoComplete="nope">
                                <div className="input-group mb-15">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Name" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/name_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Name of the company" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/c_name_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Number of user requested" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/group_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/email_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input type="password" className="form-control border-right-0 custom-input-1" placeholder="Add password" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group mb-15">
                                    <input className="form-control border-right-0 custom-input-1" placeholder="Confirm Password" autoComplete="nope"/>
                                    <span className="input-group-append bg-white border-left-0">
                                        <span className="input-group-text bg-transparent">
                                            <i className="icon"><img className="form-input-icon" src={require("../../../assets/images/password_icon.png")} alt=""/></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="input-group">
                                    <button className="action-btn-bg">REGISTER</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Registraion;