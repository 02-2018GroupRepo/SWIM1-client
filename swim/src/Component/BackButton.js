import React from 'react';


class BackButton extends React.Component {
	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		event.preventDefault();
		this.props.history.push('/outbound');
	}

	render(){
		return(
		<div>
			<button className="btn btn-secondary buttonClass" onClick={this.handleClick}>Back</button>
		</div>
		);
	}
}
export default BackButton