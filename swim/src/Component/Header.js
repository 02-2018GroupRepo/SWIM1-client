import React from 'react';
import swim from './swim.ico.jpg';
 

class Header extends React.Component {
	
   render() {
   
	      return (

        <div className="header">
	         	<div className="logo">
	         		<img class="logo" src={swim} />
	         	</div>
	         	<div className="page-title">
	         	Page Title
	         	</div>
	      </div>
      );
   }
}
export default Header