import React from 'react';
import swim from './swim.ico.jpg';
import {Link} from 'react-router-dom';
import NavBar from './NavBar.js';

 

class Header extends React.Component {
	
   render() {
   console.log(this.props);
	      return (

        <div className="header row">
        	<div className="row">
	         	<div className="col-sm-1 logo">
	         		<Link to = "/"><img className= "logoImg" src={swim} /></Link>
	         	</div>
	         	<div className="col-sm-10 col-xs-11 pageTitle">
	         	<p className="textStyle"> SWIM Dashboard</p>
	         	</div>
	         	<div className="col-sm-1 col-xs-12 navLinks">
	         	<NavBar logOut={this.props.logOut} props={this.props} />
	         	</div>
	         </div>
	         	<hr className="divider" />
	      </div>
      );
   }
}
export default Header