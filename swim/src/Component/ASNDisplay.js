import React from 'react';
import axios from 'axios';
import SavedPage from './SavedPage';

class ASNDisplay extends React.Component {
	constructor(){
		super();
		this.state = {
			checkBox: [],
			show: true
		}
		this.sendData = this.sendData.bind(this);
		this.onChange = this.onChange.bind(this);
		this.formatData = this.formatData.bind(this);
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
		for(let i = 0; i < this.props.serialNumbers.length; i++){
			document.getElementById(this.props.serialNumbers[i].serial).checked = true;
			if((checkBox.indexOf(Number(this.props.serialNumbers[i].serial) == -1) && (this.state.checkBox.length < this.props.serialNumbers.length))){
				checkBox.push(Number(this.props.serialNumbers[i].serial))
			}
		}
		this.setState({
			checkBox: checkBox
		})
		console.log(checkBox);
	}

	sendData(event){
		event.preventDefault();
		const asn = this.props.asn;
		const dockDoor = this.props.dockDoor;
		let fserials = this.props.serialNumbers;
		let serials = fserials.map((serial)=>{
			let status;
			if(this.state.checkBox.indexOf(Number(serial.serial)) > -1){
				status = "RECEIVED"
			}
			else{
				status = "IN TRANSIT"
			}
			return {
				serial: serial.serial,
				status: status
			}
		})
		this.setState({
			show: false
		})


		axios({
        method: 'post',
        headers: {"Access-Control-Allow-Origin": "*"},

        url: "http://localhost:8081/statusChange",
        data: {
           asn,
           dockDoor,
           serials
        }
      })
		//console.log(this.props);
		//this.props.props.props.props.history.push('/');
	}

	formatData(){
		let array = this.props.serialNumbers

		return array.map((data, idx)=>
			<tr>
				<th scope="row">{data.serial}</th>
				<td>IN TRANSIT</td>
				<td><input type="checkbox" className="checkbox-display" value={data.serial} id={data.serial} onClick={this.onChange}></input></td>
			</tr>

		)
		// console.log(this.state.checkBox);
	}
	  

   render() {
   	var styles = {
   		visibility: 'hidden'
   	}
   	let {asn} = this.props;
   	let {asnDisplay} = this.props;

   	if(asn > 0){
   		styles = null;

   	}
	      return (
	      	<div style={styles} className="col-sm-12 received-table">
	      		<div className=" col-sm-offset-3 col-sm-6 col-xs-12">
	      		<table className="table table-striped">
	      			<thead>
		      			<tr>
		      				<th scope="col">Serial No.</th>
		      				<th scope="col">Status</th>
		      				<th scope="col">Received?</th>
		      			</tr>
		      		</thead>
		      		<tbody>
	      				{this.formatData()}
	      				<tr>
	      					<td scope="row"><button className= "buttonClass  btn btn-secondary" onClick={this.sendData}>Save</button></td>
	      					<td></td>

	      					<td><button className="buttonClass btn btn-secondary" onClick={this.selectAll}>Select All</button>

	      					</td>
	      				</tr> 
	      			</tbody>
	      		</table>
	      		</div>
	      		<SavedPage history={this.props.history} show = {this.state.show}/>
	      	</div>
   	
      );
   }
}
export default ASNDisplay