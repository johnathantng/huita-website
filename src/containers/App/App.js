import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';
import Mission from '../../components/Mission/Mission';
import Works from '../../components/Works/Works';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<Landing />
				<Mission />
				<Works />
				<Services />
				<Contact /> 
			</div>
		);
	}
}

export default App;