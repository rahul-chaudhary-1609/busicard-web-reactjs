import * as React from "react";
import { Switch,Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes.js";
import Home from "../home/index.js";

const Registraion=React.lazy(()=>import('../onbording/registration/registration.js'))
const Login=React.lazy(()=>import('../onbording/login/login.js'))
const AboutUs=React.lazy(()=>import('../aboutUs/aboutUs.js'))
const Sales=React.lazy(()=>import('../sales/sales.js'))
const SmallBusiness=React.lazy(()=>import('../smallBusiness/smallBusiness.js'))
const Recruiting=React.lazy(()=>import('../recruiting/recruiting.js'))
const TermsAndConditions=React.lazy(()=>import('../termsAndConditions/termsAndConditions.js'))
const PrivacyPolicy=React.lazy(()=>import('../privacyPolicy/privacyPolicy.js'))
const Pricing=React.lazy(()=>import('../pricing/pricing.js'))
const UserManagemnt=React.lazy(()=>import('../userManagement/userManagement.js'))
const Logout=React.lazy(()=>import('../logout/logout.js'))
const UnderDevelopment=React.lazy(()=>import('../underDevelopment.js'))
const ErrorPage=React.lazy(()=>import('../errorPage.js'))

const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <ProtectedRoutes path="/home" component={Home}/>
            <ProtectedRoutes path="/login" component={Login}/>
            <ProtectedRoutes path="/register" component={Registraion}/>
            <ProtectedRoutes path="/aboutus" component={AboutUs}/>
            <ProtectedRoutes path="/category" component={UnderDevelopment}/>
            <ProtectedRoutes path="/contactus" component={UnderDevelopment}/>
            <ProtectedRoutes path="/pricing" component={Pricing}/>
            <ProtectedRoutes path="/sales" component={Sales}/>
            <ProtectedRoutes path="/smallbusiness" component={SmallBusiness}/>
            <ProtectedRoutes path="/recruiting" component={Recruiting}/>
            <ProtectedRoutes path="/tnc" component={TermsAndConditions}/>
            <ProtectedRoutes path="/privacypolicy" component={PrivacyPolicy}/>
            <ProtectedRoutes path="/usermanagement" component={UserManagemnt}/>
            <ProtectedRoutes path="/logout" component={Logout}/>
            <Route component={ErrorPage}/>
        </Switch>
    )
}


export default Routes;
