import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
	constructor(){
		super();
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(event){
		event.preventDefault();
		console.log("logging out user");
		console.log(this.props);
		this.props.logOut();
	}
	render(){
		console.log("navbar", this.props);

		if(localStorage.userType === "admin" || localStorage.userType === "norm"){
		return(
			<div>
				<Link to="/" onClick={this.handleLogout}>Logout</Link>
			</div>
		)
		}else{
			return(<div></div>)
		}
	}
}

export default NavBar;