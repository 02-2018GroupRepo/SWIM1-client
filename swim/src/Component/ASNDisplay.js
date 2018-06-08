import React from 'react';
import axios from 'axios';

class ASNDisplay extends React.Component {
	constructor(){
		super();
		this.state = {
			checkBox: []
		}
		this.onChange = this.onChange.bind(this);
		this.formatData = this.formatData.bind(this);
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

	formatData(){
		let array = this.props.serialNumbers

		return array.map((data, idx)=>
			<tr key={idx}>
				<td>{data.serial}</td>
				<td><input type="checkbox" className="checkbox-display" value={data.serial} onClick={this.onChange}></input></td>
			</tr>

		)
		console.log(this.state.checkBox);
	}
	  

   render() {
	      return (
	      	<div className="received-table">
	      		<table>
	      			<tr>
	      				<th>Serial No.</th>
	      				<th>Received?</th>
	      			</tr>
	      			{this.formatData()}
	      			
	      		</table>

	      		<button onClick={this.onChange}>Save</button>

	      	</div>
   	
      );
   }
}
export default ASNDisplay