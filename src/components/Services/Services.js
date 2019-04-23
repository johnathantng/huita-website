import React from 'react';
import './Services.css';
import starShape from '../../images/services/services.png';

const Services = () => {
	return(
		<div id='services'>
			<div className='heading-container'>
				<div className='img-container'>
					<img 
						id='headingImg' 
						alt='services' 
						src={starShape} 
					/>
				</div>
				<div className='text-container'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>
	);
}

export default Services;