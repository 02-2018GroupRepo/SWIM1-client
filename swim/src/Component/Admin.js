import React, {Component} from 'react';
import axios from 'axios';

class Admin extends Component{
	constructor(){
		super();
		this.state = {
			dockDoors:[]
		}
		this.deleteDockDoor = this.deleteDockDoor.bind(this);
		this.addNew = this.addNew.bind(this);
	}

	componentDidMount(){
	var dockDoors = [];

   	console.log("checking for dock doors");
   	axios({
			method: 'get',
			headers: {"Access-Control-Allow-Origin": "*"},
			url: "http://localhost:8081/getDockDoor"
		}).then(results =>{
			results.data.forEach((element, index)=>{
				let num = element.dockDoorNumber;
				console.log(num);
				dockDoors.push(
					<tr key={index}>
						<td>{num}</td>
						<td><button className = "btn btn-default" onClick={this.deleteDockDoor} value={num}>Delete</button></td>
					</tr>
					);
				if (index == results.data.length-1) {

					console.log(results.data.length);
					this.setState({
						dockDoors: dockDoors
					});
				}
			});
				
		});
   }

   deleteDockDoor(event){
   		event.preventDefault();
   		let door = event.target.value;
   		axios({
   			method: 'post',
			headers: {"Access-Control-Allow-Origin": "*"},
			url: "http://localhost:8081/deleteDockDoor",
			data: {
				dockDoorNumber: door
			}
   		}).then(results =>{
   			console.log(results.data);
   			this.componentDidMount();
   		})

   }

   addNew(event){
   	event.preventDefault();
   	let newNum = document.getElementById("newNum").value;
   	console.log(document.getElementById("newNum").value);
   	axios({
   			method: 'post',
			headers: {"Access-Control-Allow-Origin": "*"},
			url: "http://localhost:8081/addDockDoor",
			data: {
				dockDoorNumber: newNum
			}
   		}).then(results =>{
   			console.log(results.data);
   			this.componentDidMount();
   		})
   }

	render(){
		console.log("rendering Admin");
		return(
			<div className = "row">
				<h2>Dock doors in warehouse:</h2>
				
				<table>
					{this.state.dockDoors}
				</table>
				<div className = "row">
				<form onSubmit={this.addNew}>
					<label htmlFor="newNum">Add New Dock Door: </label>
					<input type="text" id="newNum" placeholder="23"/>
					<button type="submit" className="btn btn-default">Add</button>
				</form>
				</div>
				
			</div>
			)
	}
}

export default Admin;