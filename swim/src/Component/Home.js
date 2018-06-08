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
		this.props.history.push("./receiving");
		this.setState({
			clicked: true,
			show: false


		});
	}
	outboundRequest(){
		this.props.history.push("./outbound")
	}
  render() {
  	
    return (
        <div className="home">
			

			<div className="middle">
				<div className="receive-btn">
					<button className="home-btn" onClick={this.handleClick}>Receiving</button>
				</div>

				<div className="outbound-btn">
					<button className="home-btn" onClick={this.outboundRequest}>Outbound</button>
				</div>
			</div>

			
         
          
        </div>
    );
  }

  
}



export default Home;