import React, { Component } from "react";
//import logo from './img/logo.svg';
// import logo from './img/logo.png';
import './assets/css/index.css';
import ScrollApp from './components/scroll';



class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
    			<div className="text-center col-lg-12 col-sm-12 col-md-12 col-xs-12">
    				<footer>
							<ScrollApp />
    				</footer>
    			</div>
    		</div>
	  </div>
    );
  }
}

export default Footer;