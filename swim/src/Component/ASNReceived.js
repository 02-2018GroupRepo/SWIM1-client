import React from 'react';
import axios from 'axios';

class ASNReceived extends React.Component {
	constructor(){
		super();
		this.state = {
			asnNumbers: [],
			serialNumbers: [],
			asn: ""
		}
		this.getAsn = this.getAsn.bind(this);
		this.viewSerials = this.viewSerials.bind(this);
	}

	viewSerials(event){
		let asn = event.target.value
		axios({
			method: 'post',
			headers: {"Access-Control-Allow-Origin": "*"},
			url: "http://localhost:8080/getSerial",
			data: {
				asn: asn
			}
		}).then(results =>{
			console.log(results.data);
			this.setState({
				serialNumbers: results.data,
				asn: asn
			})
		})
	}


	getAsn(){
		// console.log("here");
		axios({
        method: 'get',
        headers: {"Access-Control-Allow-Origin": "*"},
        url: "http://localhost:8080/getReceivedList"
      }).then(results =>{
      	// console.log(results);
      	this.setState({
      		asnNumbers: results.data
      	})
      })

      let array = this.state.asnNumbers;

      return array.map((data, idx)=>
			<tr key={idx}>
				<td><button onClick={this.viewSerials} value={data.asn}>{data.asn}</button></td>
			</tr>

		)


	}

   render() {
   	if(this.state.serialNumbers.length > 0){
   		this.props.history.push({
			pathname: '/serial',
			state: {
				details: JSON.stringify(this.state.serialNumbers),
				asn: this.state.asn
			}
		});
   	}

	      return (
	      	<div className="asn-page">
	      		<h1>Select a received ASN:</h1>

	      		<table>
	      			{this.getAsn()}
	      		</table>

	      	
	      	</div>
       
      );
   }
}
export default ASNReceived;