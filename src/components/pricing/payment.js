import * as React from "react";
import { useHistory } from "react-router-dom";
import { countryList, toastType,apiConstants, STRIPE_PUBLISH_KEY } from "../../constants";
import PathTrackUI from "../utils/pathTrackUI";
import CustomErrorHandler from "../utils/customErrorHandler";
import { useSelector, useDispatch} from "react-redux";
import CustomToast from "../utils/customToast";
import { apiPostRequest, apiPutRequest } from "../../api";
import { loadStripe } from "@stripe/stripe-js";
import { updateUserData } from "../redux/actions";
import Loader from "../utils/loader.js"


const SubscriptionSummary=()=>{
    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    let paths=["Pricing","Subscription Plan", "Summary","Payment"]

    const dispatch=useDispatch();


    if(!store.isAuth){
        history.push("/home")
    }


    React.useEffect(()=>{
        let nav=document.getElementById("main-nav-id");
        nav.classList.add('bg-color-blue')
        return ()=>{
            nav.classList.remove('bg-color-blue')
        }
    })


    const [cardDetails,setCardDetails]=React.useState({
        nameOnCard:"",
        cardNo:"",
        cardExpiry:"",
        cardCVC:"",
        country:"",
        postalCode:"",
    })

    const [loading, setLoading]=React.useState(false);
    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })


    const handleInputChange=(e)=>{
        
        if(e.target.id==="cardNo"){
            let cardNo=e.target.value.split("").filter(char=>char!==" ")
            if(!isNaN(cardNo.join(""))){
                if(cardNo.length<=19){
                    let updatedCardNo=[];
                    cardNo.map((char,index)=>{
                    updatedCardNo.push(char);
                        if((index+1)%4===0 && (index+1)!==cardNo.length){
                            updatedCardNo.push(" ")
                        }
                    })
                
                    cardDetails.cardNo=updatedCardNo.join(""); 
                }
            }
                       
        }else if(e.target.id==="cardExpiry"){
            let cardExpiry=e.target.value.split("").filter(char=>char!=="/").join("")
            if(!isNaN(cardExpiry)){
                if(cardExpiry.length<=6){
                    let updatedCardExpiry=cardExpiry;
                    if(cardExpiry.length>2){
                        updatedCardExpiry=cardExpiry.slice(0,2)+"/"+cardExpiry.slice(2)
                    }               

                    cardDetails.cardExpiry=updatedCardExpiry; 
                }
                
            }           
        }else if(e.target.id==="cardCVC"){
            let cardCVC=e.target.value
            if(!isNaN(cardCVC)){
                if(cardCVC.length<=4){
                    cardDetails.cardCVC=cardCVC; 
                }                
            }           
        }else if(e.target.id==="postalCode"){
            let postalCode=e.target.value
            if(!isNaN(postalCode)){
                if(postalCode.length<=6){
                    cardDetails.postalCode=postalCode; 
                }                
            }           
        }else{
            cardDetails[e.target.id]=e.target.value;
        }

        setCardDetails({...cardDetails})
    }

    const validateData=()=>{
        let result=true;

        if(cardDetails.country?.trim()===""){
            result=false;
            setInfo({
                ...info,
                show:1,
                message:"Please select country",
                type:toastType.error,               
            })
        }

        setCardDetails({...cardDetails});

        return result;
    }

    const handleSubscribe=async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(!validateData()){
            setLoading(false);
            return;
        }

        let data={
            endPoint:apiConstants.payment,
            body:{
                name_on_card:cardDetails.nameOnCard,
                card_number:cardDetails.cardNo.split("").filter(char=>char!==" ").join(""),
                card_exp_month:cardDetails.cardExpiry.split("").filter(char=>char!=="/").join("").slice(0,2),
                card_exp_year:cardDetails.cardExpiry.split("").filter(char=>char!=="/").join("").slice(2),
                card_cvc:cardDetails.cardCVC,
                amount:store.selectedSubscription?.amount_to_be_paid,
                country:cardDetails.country,
                postal_code:cardDetails.postalCode,
            }
        }


        apiPostRequest(store.user.token,data)
        .then(async(response)=>{

            let stripe = await loadStripe(STRIPE_PUBLISH_KEY);
            stripe.confirmCardPayment(response.body.data.stripePaymentIntent.client_secret, {
            payment_method: response.body.data.stripePaymentMethod.id
            }).then(async function(result) {
                if (result.error) {
                    setLoading(false);
                    CustomErrorHandler(result.error,history);
                    console.log(result.error.message);
                } else {
                if (result.paymentIntent.status === 'succeeded') {
                    // The payment is complete!
                        setInfo({
                            ...info,
                            show:1,
                            message:"Payment Success",
                            type:toastType.success,               
                        })

                        let data={
                            endPoint:apiConstants.paymentSuccess,
                            body:{
                                amount:store.selectedSubscription?.amount_to_be_paid,
                                subscription_type:store.selectedSubscription?.type
                            }
                        }
                        apiPostRequest(store.user.token,data)
                        .then((response)=>{
                            setLoading(false);
                            let payload={
                                user:{
                                    ...store.user,
                                    ...response.body.data
                                }
                            }

                            dispatch(updateUserData(payload))
                            history.push("/home")
                        })
                        .catch((error)=>{
                            setLoading(false);
                            CustomErrorHandler(error,history);
                        })
                    }
                }
            });
        })
        .catch((error)=>{
            setLoading(false);
            CustomErrorHandler(error,history);
        })
    }

    return (<>
            {loading?<Loader/>:<div className="ss-main">
            <CustomToast info={info}/>
                <div className="pt-ui-div">
                    <PathTrackUI paths={paths}/>
                </div>
                <div className="ss-horizontal-line">
                    <hr></hr>
                </div>
                <div className="ss-details-div">
                    <div className="ss-details-heading">
                        <h6>PAYMENT</h6>
                        <p>Fill your card details to make payment</p>
                    </div>
                    <div className="ss-details-content-div">
                        <div className="ss-details-content-card">
                        
                            <div class="container p-0">
                                <form onSubmit={handleSubscribe} action="#">
                                <div class="card px-4">
                                    <div className="payment-card-header">
                                        <div className="ss-card-box-design mb-3">
                                            <img src={require('../../assets/images/card_icon_img.png')} alt=""/>
                                            <span>Card</span>
                                        </div>
                                        <div className="ss-card-amount">
                                            ${store.selectedSubscription?.amount_to_be_paid}
                                        </div>
                                    </div>
                                    <div class="row gx-3">
                                        <div class="col-12">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Name on card</p> <input id="nameOnCard" value={cardDetails.nameOnCard} onChange={handleInputChange} class="form-control mb-3" type="text" placeholder="Name"  required/>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Card Number</p> <input id="cardNo" value={cardDetails.cardNo} onChange={handleInputChange} class="form-control mb-3" type="text" placeholder="1234 5678 435678" required/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Expiry</p> <input id="cardExpiry" value={cardDetails.cardExpiry} onChange={handleInputChange} class="form-control mb-3" type="text" placeholder="MM/YYYY" required/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">CVV/CVC</p> <input id="cardCVC" value={cardDetails.cardCVC} onChange={handleInputChange} class="form-control mb-3 pt-2 " type="password" placeholder="***" required/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Country</p> <select id="country" value={cardDetails.country} onChange={handleInputChange} className="custom-select" required>
                                                    <option selected disabled>Select Country</option>
                                                    {countryList.map((ele,index)=>{
                                                        return<option key={index} value={ele.code}>{ele.value}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Postal Code</p> <input id="postalCode" value={cardDetails.postalCode} onChange={handleInputChange} class="form-control mb-3 pt-2 " type="text" placeholder="postal code" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ss-details-button text-center">
                                        <button disabled={loading} className="action-btn-bg" type="submit">SUBSCRIBE</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="ss-right-space"></div>
            </div>}
    </>
    )
}

export default SubscriptionSummary;


//https://codesandbox.io/s/9y8vkrrx9o?file=/src/cardUtils.js

//https://bbbootstrap.com/snippets/bootstrap-5-payment-form-gradient-button-91213875