import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class SavedPage extends Component{

	constructor(){
		super();

		// this.state ={
		// 	show: false
		// }

		this.goSomewhere = this.goSomewhere.bind(this);
	}


	componentDidMount(){
		// setTimeout(()=>{this.props.history.push("/")}, 5000);
	}

	goSomewhere(event){
		event.preventDefault();
		// console.log(this.props)
		this.props.history.push("/");
	}

	render(){

		let style = {
			visibility : this.props.show ? "hidden" : null
		}

		return(	
			<div style={style} className="static-modal">
  				<Modal.Dialog>

    				<Modal.Header>
      					<Modal.Title>Save Notification</Modal.Title>
    				</Modal.Header>

    				<Modal.Body>This data has been saved.</Modal.Body>

    				<Modal.Footer>
      					<Button onClick={this.goSomewhere}>Close</Button>
    				</Modal.Footer>

  				</Modal.Dialog>
  			</div>
 

		)
	}

}

export default SavedPage