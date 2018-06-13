import React from 'react';
import axios from 'axios';
import ASNDisplay from './ASNDisplay';
import { Modal, Button } from 'react-bootstrap';
import SavedPage from './SavedPage';
import BackButton from './BackButton';

class Loaded extends React.Component {
	constructor(){
		super();
		this.state = {
			checkBox: [],
			serialNumbers: [],
			details: "",
			show: true
		}
		this.sendData = this.sendData.bind(this);
		this.onChange = this.onChange.bind(this);
		this.selectAll = this.selectAll.bind(this);
		
	}

	onChange(e){
		const checkBox = this.state.checkBox;
		let index
		if(e.target.checked){
			console.log(+e.target.value)
			checkBox.push(+e.target.value)
		}
		else{
			index = checkBox.indexOf(+e.target.value)
			checkBox.splice(index, 1)
		}

		console.log(checkBox);

		this.setState({
			checkBox: checkBox
		})
	}

	selectAll(event){
		event.preventDefault();
		let checkBox = this.state.checkBox;
		for(let i = 0; i < this.state.serialNumbers.length; i++){
			document.getElementById(this.state.serialNumbers[i].serial).checked = true;
			if((checkBox.indexOf(Number(this.state.serialNumbers[i].serial) == -1) && (this.state.checkBox.length < this.state.serialNumbers.length))){
				checkBox.push(Number(this.state.serialNumbers[i].serial))
			}
			// console.log("doing this");
			// console.log(this.props.location.state.asn)
		}
		this.setState({
			checkBox: checkBox,
		})
		console.log(checkBox);	

	}

	sendData(event){
		event.preventDefault();
		const asn = this.props.location.state.asn;
		const dockDoor = 0;
		
		let fserials = this.state.serialNumbers;
		console.log("Here")
		let serials = fserials.map((serial)=>{
			let status;
			if(this.state.checkBox.indexOf(Number(serial.serial)) > -1){
				status = "LOADED"
			}
			else{
				status = "RECEIVED"
			}
			return {
				serial: serial.serial,
				status: status
			}

			console.log(status)
		})
		console.log(this.state.checkBox)
		this.setState({
			show: false
		})


		axios({
        method: 'post',
        headers: {"Access-Control-Allow-Origin": "*"},
        url: `${window.apiurl}/statusChange`,
        data: {
           asn,
           dockDoor,
           serials
        }
      })


	}

	receivedData(){
		let array = this.state.serialNumbers

		return array.map((data, idx)=>
			<tr key={idx}>
				<th scope="row" className="text-center">{data.serial}</th>
				<td><input type="checkbox" id={data.serial} value={data.serial} onClick={this.onChange}></input></td>
			</tr>

		)
		
	}
	

   render() {
   	if(this.state.serialNumbers.length == 0){
   		this.setState({
			serialNumbers: JSON.parse(this.props.location.state.details)
		})
   	}
	      return (
	      	<div className="received-table">
	      		<h3>ASN# {this.props.location.state.asn}</h3>
	      		<div className="col-sm-offset-4 col-sm-4">
		      		<table className="table table-striped">
		      			<thead>
			      			<tr>
			      				<th scope="col" className="text-center">Serial No.</th>
			      				<th scope="col" className="text-center">Loaded?</th>
			      			</tr>
			      		</thead>
			      		<tbody>
			      			{this.receivedData()}
			      			<tr scope="row">
		      					<td><button className="buttonClass btn btn-secondary" onClick={this.sendData}>Save</button></td>
		      					<td><button className="buttonClass btn btn-secondary" onClick={this.selectAll}>Select All</button></td>
		      				</tr>
			      		</tbody>
		      		</table>
		      		<div className='footer-margin'><BackButton history={this.props.history}/>
		      		</div>
		      	</div>

	      	<SavedPage history={this.props.history} show = {this.state.show}/>	

	      	</div>
   	
      );
   }	
}
export default Loaded;