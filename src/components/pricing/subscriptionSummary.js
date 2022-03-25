import * as React from "react";


const SubscriptionSummary=()=>{

    React.useEffect(()=>{
        let nav=document.getElementById("main-nav-id");
        nav.classList.add('bg-color-blue')
        return ()=>{
            nav.classList.remove('bg-color-blue')
        }
    })

    return (
        <div className="home-bg flex-row-center-center">
            <div>
                <h1>Welcome to About Us</h1>
            </div>
        </div>
    )
}

export default SubscriptionSummary;