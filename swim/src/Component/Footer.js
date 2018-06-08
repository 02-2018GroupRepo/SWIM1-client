import React from 'react';


class Footer extends React.Component {
   render() {  
	
      return (
        <div className ="footer row">
        	<hr className = "footerDivider" />
        	<div className ="row textSize">
        		<p className="textTitle">Syntel Bootcamp Capstone Project. 06/04/18 to 06/14/18. 
        		Contributors: Tawni Hollers, Noelle Irvin, Toby Blanchard, Branden Hart, Bryant Beeler, Shahar Levy</p>
        		SWIM stands for Syntel Warehouse Integration Management. This project consists of a SpringBoot backend, a React front end, and a MySql database. GCP and Jenkins were used to deploy the application with CI/CD. Jenkins takes the application and creates a Docker container and <br/>then a Kubernetes cluster upon new merges. 
        		Github repo link for client side: https://github.com/02-2018GroupRepo/SWIM1-client/tree/FeatureStyling 
        		Github repo link for server side: https://github.com/02-2018GroupRepo/SWIM1<br/>
        	</div>
        </div>
      );
   }
}

export default Footer