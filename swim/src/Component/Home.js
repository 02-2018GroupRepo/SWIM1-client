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
	}
	
	handleClick() {
		console.log(this.props.props.history)
		this.props.props.history.push("./receiving");
		this.setState({
			clicked: true,
			show: false


		});
	}
	outboundRequest(){
		this.props.props.history.push("./outbound")
	}
	configureDD(){
		console.log("configure Dock Door");
	}

	checkAdmin(){
	if(localStorage.userType === "admin"){
		return(
					<div className="col-sm-12 backgroundBtn">
						<button className="adminBtn homeBtn btn" onClick={this.configureDD}>Configure</button>
					</div>
			)
		}
	}

  render() {
  	if(this.props.auth){
	    return (
	        <div className="home row">
					<div className="col-sm-6 backgroundBtn">
						<button className="receiveBtn homeBtn btn" onClick={this.handleClick}>Receiving</button>
					</div>
					<div className="col-sm-6 backgroundBtn">
						<button className="outboundBtn homeBtn btn" onClick={this.outboundRequest}>Outbound</button>
					</div>
					
					{this.checkAdmin()}
	        </div>
	    );
	}else{
		return(<div></div>)
	}
  }
}

export default Home;