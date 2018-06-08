import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Component/Home';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
	<App /> 
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
