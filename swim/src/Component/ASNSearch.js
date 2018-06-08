import React from 'react';
import ASNDisplay from './ASNDisplay';
import axios from 'axios';

class ASNSearch extends React.Component {
   constructor(){
      super();
      this.state = {
         serialNumbers: []
      }
      this.handleRequest = this.handleRequest.bind(this);
   }

   handleRequest(event){
      event.preventDefault();
      const asn = document.getElementById('asn').value;
      console.log(asn);
      axios({
         method: 'post',
         headers: {"Access-Control-Allow-Origin": "*"},
         url: "http://localhost:8080/getSerial",
         data: {
            asn
         }
      }).then(results => {
         console.log(results);
         this.setState({
            serialNumbers : results.data
         })

      })
   }

   render() {
   	var styles = {
   		visibility: 'hidden'
   	}
   	let {doorNumber} = this.props;
   	let {asnDisplay} = this.props;

   	if(doorNumber > 0){
   		styles = null;

   	}

         // setTimeout(() => {
         //    console.log(this.state.serialNumbers)
         // }, 5000)

         // console.log(this.state.serialNumbers)
      
   	
   
	      return (
	      	<div style={styles} className="asn-search">
	      	<form>
	      		<label>Enter an ASN: </label>
	      		<input type="text" placeholder="Search.." id="asn" />
	      		<button className="search-btn" onClick= {this.handleRequest} >Search</button>
	      	</form>
	      	<ASNDisplay serialNumbers = {this.state.serialNumbers}/> 
	      	</div>
       
      );
   }
}
export default ASNSearch