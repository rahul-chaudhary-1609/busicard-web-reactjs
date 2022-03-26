import * as React from "react";
import { useHistory } from "react-router-dom";
import PathTrackUI from "../utils/pathTrackUI";


const SubscriptionSummary=()=>{
    const history=useHistory();
    let paths=["Pricing","Subscription Plan", "Summary"]

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
                        <h6>SUBSCRIBTION DETAILS</h6>
                        <p>Please check your subscription details</p>
                    </div>
                    <div className="ss-details-content-div">
                        <div className="ss-details-content-card">
                        <div className="ss-details-button">
                            <button className="action-btn-bg" onClick={()=>history.push('/subscription-payment')}>Proceed to payment</button>
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