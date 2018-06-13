import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component{

	constructor(props){
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		const username = document.getElementById("username").value;
		const pwd = document.getElementById("pwd").value;

		const loginRequest = axios({
			method:"POST",
			url:"https://35.237.202.1:8081/login",
			data:{
				username,
				pwd
			}
		});
		loginRequest.then((loginData)=>{
			console.log(loginData)
			if(loginData.data === "norm"){
				localStorage.setItem('userType', loginData.data);
				this.props.isAuth();
			}else if(loginData.data === "admin"){
				console.log("here")
				console.log(this.props);
				localStorage.setItem('userType', loginData.data);
				this.props.isAuth();
			}
		})
	}
	render(){
		console.log(this.props.auth);
		console.log(localStorage.userType);
		if(localStorage.userType === "admin" || localStorage.userType === "norm"){
			return (<div></div>)
		}else if(!this.props.auth){
			return(
				<div className="col-sm-offset-4 col-sm-4 loginWrapper">
					<div className="loginText">
						<h5>Please login in to access the dashboard.</h5>
					</div>
					<form onSubmit={this.handleLogin} className="formLogin">
						<div className="form-group">
							<label htmlFor="username">Username: </label>
							<input type="text" id="username" placeholder=" Username" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Password: </label>
							<input type="password" id="pwd" placeholder=" Password"/>
						</div>
						<button type="submit" className = "btn btn-default">Login</button>
					</form>
				</div>	
			)
		}else{
			return(
				<div></div>
			)
		}
	}
}

export default Login;