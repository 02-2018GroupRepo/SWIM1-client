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
	}
	handleClick() {
		this.props.history.push("./DockDoor");
		this.setState({
			clicked: true,
			show: false


		});
	}
  render() {
  	
    return (
        <div className="home">
			

			<div className="middle">
				<div className="receive-btn">
					<button className="home-btn" onClick={this.handleClick}>Receiving</button>
				</div>

				<div className="outbound-btn">
					<button className="home-btn">Outbound</button>
				</div>
			</div>

			
         
          
        </div>
    );
  }

  
}



export default Home;