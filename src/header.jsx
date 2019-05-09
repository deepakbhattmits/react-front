import React, { Component } from "react";

// import './assets/css/index.css';
// import './assets/less/custom.less';


import Navigation from './components/navigation';


class Header extends Component {
	
	 
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
    			<div className="text-center col-lg-12 col-sm-12 col-md-12 col-xs-12">
    				<header>
    					  <Navigation />
    				</header>
    			</div>
					<div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div className="hi"></div>
						</div>
						<div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div className="hi1"></div>
						</div>
    		</div>
	  </div>
    );
  }
}

export default Header;