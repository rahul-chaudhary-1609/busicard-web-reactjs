import * as React from "react";


const Pricing=()=>{
    let subscriptionPlanDetails=[
        {
            label:"Limit on business cards stored",
            col1:"100",
            col2:"200",
            col3:"Unlimited",
        },
        {
            label:"Business card analytics",
            col1:"Free for self card",
            col2:"Free for self card",
            col3:"View analytics on anybody’s card",
        },
        {
            label:"Export network data",
            col1:"Yes",
            col2:"Yes",
            col3:"View analytics on anybody’s carYes",
        },
    ]

    return (
        <div className="home-bg">
            <div className="sp-main">
                <div className="sp-head-div">
                    <div className="sp-heading">
                        <h1>Subscription Plans</h1>
                    </div>
                    <div className="sp-head-text">
                        <p>
                            Check what plan is best for you. 
                            We care about your convenience in using the BusiCard features,
                            accordingly we are providing you the best plans in different prices.
                        </p>
                    </div>
                </div>
                <div className="sp-card-div">
                    <div className="sp-card-1">
                        <div className="sp-card-1-heading">Free</div>
                    </div>
                    <div className="sp-card-2">
                        <div className="sp-card-2-heading">Premium</div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default Pricing;