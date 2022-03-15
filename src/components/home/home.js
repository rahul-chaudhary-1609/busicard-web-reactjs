import * as React from "react";


const Home=()=>{
    return (
        // <div className="home-bg flex-center-center">
        //     <div>
        //         <h1>Welcome to Home</h1>
        //     </div>
        // </div>
        <header className="head">
            <div className="head-details  mt-100">
                <div className="main-details">
                    <h1 className="main-heading pr-10">
                        <p className="main-heading-text text-to-right"> Digital Business Cards </p>
                    </h1>
                    <p className="sub-heading"> <span className="text-to-right ls0-12"> THE NEXT GENERATION OF NETWORKING </span></p>
                    <p className="header-details-1">
                        <span className="text-to-righ"> BusiCard lets you get the most out of your business card. It allows you
                            to share your business card digitally, linking to all of your social media and website
                        </span>
                        <span className="text-to-righ">
                            With BusiCard, managing your contacts has never been easier. Sort your contacts in custom
                            categories that fit your business needs. BusiCard even lets you see what links your leads are
                            most interested in.
                        </span>
                    </p>
                </div>

                <div className="vector-img">
                    <img src={require('../../assets/images/home_vector_img.png')} alt=""/>
                </div>
            </div>
            <div className="explore-div">
                <a href="/"> EXPLORE THE POSSIBILITIES</a>
            </div>
        </header>
    )
}

export default Home;