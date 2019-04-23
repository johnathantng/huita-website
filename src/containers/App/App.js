import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<Landing />
			</div>
			/*
				<Mission />
				<Works />
				<Services />
				<Contact /> 
			*/
		);
	}
}

export default App;