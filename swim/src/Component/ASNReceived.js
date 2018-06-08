import React from 'react';
import axios from 'axios';

class ASNReceived extends React.Component {
	constructor(){
		super();
		this.state = {
			asnNumbers: []
		}
		this.getAsn = this.getAsn.bind(this);
	}

	//Check to see if anything on this page works
	getAsn(){
		axios({
        method: 'get',
        headers: {"Access-Control-Allow-Origin": "*"},
        url: "http://localhost:8080/statusChange"
      }).then(results =>{
      	console.log(results);
      	this.setState({
      		asnNumbers: results.data
      	})
      })

      let array = this.state.asnNumbers;

      return array.map((data, idx)=>
			<tr key={idx}>
				<td><button>{data.asn}</button></td>
			</tr>

		)


	}

   render() {
   	   
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