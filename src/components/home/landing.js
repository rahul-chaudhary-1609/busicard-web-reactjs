import * as React from "react";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div id="landing-main" className="landing-main-div">
      <div className="landing-subdiv-1">
        <div className="ls-1-horizontal-line">
          <hr></hr>
        </div>
        <div className="ls-1-heading-div">
          <div className="ls-1-heading-content-div">
            <h1>LET'S GET NETWORKING</h1>
          </div>
          <div className="ls-1-heading-tagline">
            BusiCard is <span> More </span> Than a Digital Business Card
          </div>
        </div>
        <div className="ls-1-dots">
          <img src={require('../../assets/images/dots_group_6_img.png')} alt=""/>
        </div>
        <div className="ls-1-card-1">
          <div className="ls-1-card-1-head">SALES</div>
          <div>
            <p>BusiCard provides analytics that help businesses track
              leads as they enter into their sales funnels. 
              BusiCard even provides follow-up reminders for new leads.
             </p>
          </div>
          <div className="ls-1-card-1-btn">
            <button className="action-btn-bg">LEARN MORE</button>
          </div>
        </div>
        <div className="ls-1-card-2">
          <div>
            <Link className="custom-link" to="/smallbusiness">SMALL BUSINESS</Link>
          </div> 
        </div>
        <div className="ls-1-card-3">
          <div>
            <Link className="custom-link" to="/recruiting">RECRUITING</Link>
          </div>
        </div>
        <div className="ls-1-right-space"></div>
      </div>
      <div className="landing-subdiv-2">
        <div className="ls-2-left-space"></div>
        <div className="ls-2-card-1"></div>
        <div className="ls-2-card-2">
          <div className="ls-2-card-2-head">EVENTS</div>
            <div>
              <p>Never pay for another contact exchange tool again. 
                 BusiCard offers all the benefits and more as
                those lanyards that you see at networking events,
                yet Busicard is free to download for everyone.
              </p>
            </div>
            <div className="ls-2-card-2-btn">
              <button className="action-btn-bg">LEARN MORE</button>
            </div>
        </div>
        <div className="ls-2-horizontal-line">
          <hr></hr>
        </div>
      </div>
      <div className="landing-subdiv-3">
        <div className="ls-3-horizontal-line">
          <hr></hr>
        </div>
        <div className="ls-3-heading-div">
          <div className="ls-3-heading-content-div">
            <h1>DOWNLOAD OUR APP</h1>
          </div>
          <div className="ls-3-heading-tagline">
            Create and customize your own digital business cards and Learn more about how BusiCard can help you
          </div>
          <div className="ls-3-apps-div">
            <img src={require('../../assets/images/play_store.png')} alt=""/>
            <img src={require('../../assets/images/app_store.png')} alt=""/>
          </div>
        </div>
        <div className="ls-3-card-1">
          <div className="ls-3-card-1-img">
            <img src={require('../../assets/images/network_balls.png')} alt=""/>
          </div>
        </div>
        <div className="ls-3-card-2">
          <div className="ls-3-card-2-img-1">
            <img src={require('../../assets/images/mobile_img_1.png')} alt=""/>
          </div>
          <div className="ls-3-card-2-img-2">
            <img src={require('../../assets/images/mobile_img_2.png')} alt=""/>
          </div>
        </div>
        <div className="ls-3-dots">
          <img src={require('../../assets/images/dots_group_5_img.png')} alt=""/>
        </div>
      </div>
      <div className="landing-subdiv-4">
        <div className="ls-4-horizontal-line">
          <hr></hr>
        </div>
        <div className="ls-4-heading-div">
          <div className="ls-3-heading-content-div">
            <h1>GET IN TOUCH</h1>
          </div>
        </div>
        <div className="ls-4-dots">
          <div className="ls-4-dots-img">
            <img src={require('../../assets/images/dots_group_3_img.png')} alt=""/>
          </div>
        </div>
        <div className="ls-4-card-1">
          <div className="ls-4-card-1-head">SUBSCRIBE TO OUR NEWSLETTER</div>
            <div>
              <p>Sign up with your email address to receive news and updates
               about BusiCard and features that may be perfect for you or your business.
              </p>
            </div>
            <div className="input-group">
                <input className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope"/>
                <span className="input-group-append bg-white border-left-0">
                    <span className="input-group-text bg-transparent">
                        <i className="icon"><img className="form-input-icon" src={require("../../assets/images/email_icon.png")} alt=""/></i>
                    </span>
                </span>
            </div>
            <div className="ls-4-card-1-btn">
              <button className="action-btn-bg">SIGN UP</button>
            </div>
        </div>
        <div className="ls-4-card-2">
          <div className="ls-4-card-2-img">
            <img src={require('../../assets/images/mobile_pen_img.png')} alt=""/>
          </div>
          <div className="ls-4-card-2-strip">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
