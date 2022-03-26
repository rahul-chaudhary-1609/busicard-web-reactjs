import * as React from "react";
import { useHistory } from "react-router-dom";
import PathTrackUI from "../utils/pathTrackUI";


const SubscriptionSummary=()=>{
    const history=useHistory();
    let paths=["Pricing","Subscription Plan", "Summary","Payment"]

    React.useEffect(()=>{
        let nav=document.getElementById("main-nav-id");
        nav.classList.add('bg-color-blue')
        return ()=>{
            nav.classList.remove('bg-color-blue')
        }
    })

    return (<>
            <div className="ss-main">
                <div className="pt-ui-div">
                    <PathTrackUI paths={paths}/>
                </div>
                <div className="ss-horizontal-line">
                    <hr></hr>
                </div>
                <div className="ss-details-div">
                    <div className="ss-details-heading">
                        <h6>PAYMENT</h6>
                        <p>Fill your account details to make payment</p>
                    </div>
                    <div className="ss-details-content-div">
                        <div className="ss-details-content-card">
                        
                            <div class="container p-0">
                                <div class="card px-4">
                                    <p class="h8 py-3">Payment Details</p>
                                    <div class="row gx-3">
                                        <div class="col-12">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Person Name</p> <input class="form-control mb-3" type="text" placeholder="Name" value="Barry Allen"/>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Card Number</p> <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Expiry</p> <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">CVV/CVC</p> <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">Expiry</p> <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="d-flex flex-column">
                                                <p class="text mb-1">CVV/CVC</p> <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ss-details-button">
                                <button className="action-btn-bg" onClick={()=>history.push('/subscription-payment')}>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="ss-right-space"></div>
            </div>
    </>
    )
}

export default SubscriptionSummary;


//https://codesandbox.io/s/9y8vkrrx9o?file=/src/cardUtils.js