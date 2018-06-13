import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import DockDoor from './DockDoor';
import ASNDisplay from './ASNDisplay';

 
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			show: true

		};

		this.handleClick = this.handleClick.bind(this);
		this.outboundRequest = this.outboundRequest.bind(this);
		this.configureDD = this.configureDD.bind(this);
	}
	
	handleClick() {
		console.log(this.props.history)
		this.props.history.push("./receiving");
		this.setState({
			clicked: true,
			show: false


		});
	}
	outboundRequest(){
		this.props.history.push("./outbound")
	}
	configureDD(){
		console.log("configure Dock Door");
		this.props.history.push("./configure");
	}

	checkAdmin(){
	if(localStorage.userType === "admin"){
		return(
					
						<button className="homeBtn btn" onClick={this.configureDD}>Configure</button>
					
			)
		}
	}

  render() {
  	if(localStorage.userType === "admin" || localStorage.userType === "norm"){
	    return (
	        <div className="home row">
					<div className="col-sm-12">
					<img src = "/truck.gif"	/>
					</div>
					<div className="backgroundBtn">
						<button className="homeBtn btn" onClick={this.handleClick}>Receiving</button>
						<button className="homeBtn btn" onClick={this.outboundRequest}>Outbound</button>
					{this.checkAdmin()}
					</div>

					
	        </div>
	    );
	}else{
		return(<div></div>)
	}
  }
}

export default Home;