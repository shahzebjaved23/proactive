import React, { Component } from 'react';
import './MainContent.css';
import getMoreDoneInLessTime from "../assets/img/work-together.jpg";
import decreaseTimeToMarket from "../assets/img/decrease-time-to-market.jpg";
import payOnlyForWhatYouNeed from "../assets/img/pay-only-for-what-you-need.png"

class MainContent extends Component {
  render() {
    return (
    	<div className="container" style={{marginTop: 30}}>
    		<div className="content-section save-time">
    			<div className="row">
    				<div className="col-md-6">
    					<div className="content-section-heading">
    						<h1>Save Time And Money !</h1>
    					</div>
    					<div className="content-section-body">
    						<p>
    							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
    					</div>
    				</div>
    				<div className="col-md-6">
    					<img width="400" height="225" style={{margin: "auto"}} src={getMoreDoneInLessTime} className="img img-responsive"/>
    				</div>
    			</div>
    		</div>
    		<hr/>
    		<div className="content-section deliver-great-product">
    			<div className="row">
    				<div className="col-md-6">
    					<img width="400" height="225" style={{margin: "auto"}} src={payOnlyForWhatYouNeed} className="img img-responsive"/>
    				</div>
    				<div className="col-md-6">
    					<div className="content-section-heading">
    						<h1>Deliver Great Products</h1>
    					</div>
    					<div className="content-section-body">
    						<p>
    							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
    					</div>
    				</div>
    			</div>
    		</div>
    		<hr/>
    		<div className="content-section create-great-value">
    			<div className="row">
    				<div className="col-md-6">
    					<div className="content-section-heading">
    						<h1>Create great value and change the world</h1>
    					</div>
    					<div className="content-section-body">
    						<p>
    							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
    					</div>
    				</div>
    				<div className="col-md-6">
    					<img width="400" height="225" style={{margin: "auto"}} src={decreaseTimeToMarket} className="img img-responsive"/>
    				</div>
    			</div>
    		</div>
        	
    	</div>
    );
  }
}

export default MainContent;
