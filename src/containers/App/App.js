import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';
import Mission from '../../components/Mission/Mission';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<Landing />
				<Mission />
			</div>
			/*
				<Works />
				<Services />
				<Contact /> 
			*/
		);
	}
}

export default App;