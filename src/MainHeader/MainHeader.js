import React, { Component } from 'react';
import './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
      	<div className="text-overlay">
      		<div className="text-overlay-heading">
      			<h1>Proactive together!</h1>
      		</div>
      		
      		<div className="text-overlay-body">
      			<p>Lets Build something proactively</p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default MainHeader;
