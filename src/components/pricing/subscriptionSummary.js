import * as React from "react";
import { useHistory } from "react-router-dom";
import PathTrackUI from "../utils/pathTrackUI";
import { useSelector} from "react-redux";



const SubscriptionSummary=()=>{
    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    let paths=["Pricing","Subscription Plan", "Summary"]
    

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
                        <div className="ss-details-table">
                            <table>
                                <tr>
                                    <td className="table-label">Type</td>
                                    <td>: </td>
                                    <td className="table-value">{store.selectedSubscription?.type===1?"Monthly":"Yearly"}</td>
                                </tr>
                                <tr>
                                    <td className="table-label">Number of Users</td>
                                    <td>: </td>
                                    <td className="table-value">{store.selectedSubscription?.number_of_users}</td>
                                </tr>
                                <tr>
                                    <td className="table-label">Cost per User</td>
                                    <td>: </td>
                                    <td className="table-value">${store.selectedSubscription?.amount}</td>
                                </tr>
                                <tr>
                                    <td className="table-label"><strong>Total amount to be paid</strong></td>
                                    <td>: </td>
                                    <td className="table-value"><strong>${store.selectedSubscription?.amount_to_be_paid}</strong></td>
                                </tr>
                            </table>
                            
                        </div>
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