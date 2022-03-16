import * as React from "react";

const Home=()=>{
    return (

        <div className="home-bg">
            <div className="home-main">
                <div className="home-left-div mt-80">
                    <div className="heading-div">
                        <h1>Digital Business Cards</h1>
                    </div>
                    <div className="content-div">
                        <span className="content-1">
                            THE NEXT GENERATION OF NETWORKING
                        </span>
                        <span  className="content-2">
                            <p>
                            BusiCard lets you get the most out of your business card. It allows you
                            to share your business card digitally, linking to all of your social media and website
                            </p>
                        </span>
                        <span  className="content-3">
                            <p>
                            With BusiCard, managing your contacts has never been easier. Sort your contacts in custom
                            categories that fit your business needs. BusiCard even lets you see what links your leads are
                            most interested in.
                            </p>
                        </span>
                    </div>
                </div>
                <div className="home-right-div mt-80">
                    <div >
                        <img src={require('../../assets/images/home_vector_img.png')} alt=""/>
                    </div>
                </div>
                <div className="home-bottom-div">
                    <div className="home-bottom-part-1">
                        <a href="/"> EXPLORE THE POSSIBILITIES</a>
                    </div>
                    <div  className="home-bottom-part-2">
                        
                    </div>
                    <div  className="home-bottom-part-3">
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;