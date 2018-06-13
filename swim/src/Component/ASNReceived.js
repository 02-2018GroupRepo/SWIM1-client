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
			url: "https://35.237.202.1:8081/getSerial",
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
        url: "https://35.237.202.1:8081/getReceivedList"
      }).then(results =>{
      	// console.log(results);
      	this.setState({
      		asnNumbers: results.data
      	})
      })

      let array = this.state.asnNumbers;

      return array.map((data, idx)=>
			<tr key={idx}>
				<td scope="row"><button className = "buttonClass btn btn-secondary" onClick={this.viewSerials} value={data.asn}>{data.asn}</button></td>
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
	      		<h3>Please select the ASN to be loaded.</h3>
	      		<div className="col-sm-offset-4 col-sm-4">
		      		<table className="table table-striped footer-margin">
		      			<thead>
		      				<tr>
		      					<th scope="col">Received ASN #'s</th>
		      				</tr>
		      			</thead>
		      			<tbody>
			      			{this.getAsn()}
						</tbody>
		      		</table>
		      	</div>
	      	
	      	</div>
       
      );
   }
}
export default ASNReceived;