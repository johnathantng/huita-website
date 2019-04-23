import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';
import Mission from '../../components/Mission/Mission';
import Works from '../../components/Works/Works';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<Landing />
				<Mission />
				<Works />
			</div>
			/*
				<Services />
				<Contact /> 
			*/
		);
	}
}

export default App;