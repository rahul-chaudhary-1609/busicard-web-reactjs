import * as React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { toastType } from "../../constants";
import CustomToast from "../utils/customToast";
import { selectSubscription } from "../redux/actions";


const Pricing=()=>{
    const store=useSelector(store=>store.authReducer);
    const history=useHistory();

    const dispatch=useDispatch();

    let [userCount,setUserCount]=React.useState(`${store.user.number_of_users}`);

    let subscriptionPlan=[
        {
            label:"Store 100 number of business cards",
            type:1 //type: 1=>free, 2=> premium
        },
        {
            label:"Cannot view analytics on your business card",
            type:1
        },
        {
            label:"Cannot export analytics of your business card",
            type:1
        },
        {
            label:"Cannot download your contacts’ information",
            type:1
        },
        {
            label:"Create 5 contact categories",
            type:1
        },
        {
            label:"Store an UNLIMITED number of business cards",
            type:2 //type: 1=>free, 2=> premium
        },
        {
            label:"View analytics on your business card",
            type:2
        },
        {
            label:"Export analytics of your business card",
            type:2
        },
        {
            label:"Download your contacts’ information",
            type:2
        },
        {
            label:"Create UNLIMITED contact categories",
            type:2
        },
        
    ]

    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })

    const handleInputChnage=(e)=>{
        if(!isNaN(e.target.value)){
            setUserCount(e.target.value)
        }
    }

    const handleSubscriptionButtonClick=(type)=>{//type: 1=> Monthly, 2=> Yearly
        if(!store.isAuth){
            setInfo({
                show:1,
                message:"Please login!",
                type:toastType.info
            })
        }else if(!store.user?.status){
            setInfo({
                show:1,
                message:"Your account is not approved yet!",
                type:toastType.info
            })
        }else if(store.user?.subscription_plan==2){
            setInfo({
                show:1,
                message:"You already have an active subscription!",
                type:toastType.info
            })
        }else{
            if(userCount.trim()==="" || parseInt(userCount)<1){
                setInfo({
                    show:1,
                    message:"Number of user should be atleast 1",
                    type:toastType.error
                })

                return;
            }
            const payload={
                type,
                amount:type===1?"5":"50",
                number_of_users:parseInt(userCount),
                amount_to_be_paid:(parseInt(userCount)*(type===1?5:50)).toString(),
            }
            dispatch(selectSubscription(payload))
            history.push(`/subscription-summary`);
        }
        
    }

    return (
        <div id="pricing-main-div" className="home-bg">
        <CustomToast info={info}/>
            <div className="sp-main">
                <div className="sp-head-div">
                    <div className="sp-heading">
                        <h1 id="pricing-main-heading">Subscription Plans</h1>
                    </div>
                    <div className="sp-head-text">
                        <p id="pricing-main-text">
                            Check what plan is best for you. 
                            We care about your convenience in using the BusiCard features,
                            accordingly we are providing you the best plans in different prices.
                        </p>
                    </div>
                </div>
                <div className="sp-card-div">
                    <div className="sp-card-1">
                        <div className="sp-card-1-heading"><span>Free</span></div>
                        <div className="sp-card-1-content-div">
                            {
                                subscriptionPlan.filter(plan=>plan.type===1).map((plan,index)=>{
                                    return(
                                        <div key={index}>
                                            <spna><img src={require('../../assets/images/cross_tick_circle.png')} alt=""/></spna>
                                            <p>{plan.label}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="sp-card-2">
                        <div className="sp-card-2-heading"><span>Premium</span></div>
                        <div className="sp-card-2-content-div">
                            {
                                subscriptionPlan.filter(plan=>plan.type===2).map((plan,index)=>{
                                    return(
                                        <div key={index}>
                                            <spna><img src={require('../../assets/images/check_tick_circle.png')} alt=""/></spna>
                                            <p>{plan.label}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {store.isAuth?<div className="user_count_div">
                            <label>Number of User</label>
                            <input value={userCount} type="text" onChange={handleInputChnage}/>
                        </div>:null}
                        <div className="sp-card-2-button-div">
                            <div onClick={()=>handleSubscriptionButtonClick(1)}>
                                <span>MONTHLY SUBSCRIPTION</span>
                                <p>$5 per user billed monthly</p>
                            </div>
                            <div onClick={()=>handleSubscriptionButtonClick(2)}>
                                <span>YEARLY SUBSCRIPTION</span>
                                <p>$50 per user billed monthly</p>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default Pricing;