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
		this.props.props.props.history.push('/');
	}
	render(){
		console.log("navbar", this.props);

		if(localStorage.userType === "admin" || localStorage.userType === "norm"){
		return(
			<div className = "logoutLink">
				<Link to="/" className='homeLink'>Home</Link>
				<Link to="/" onClick={this.handleLogout}>Logout</Link>
			</div>
		)
		}else{
			return(<div></div>)
		}
	}
}

export default NavBar;