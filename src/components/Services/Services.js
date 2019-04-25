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
				<div className='services-list'>
					<ul>
						<li>Logo Design</li>
						<li>Website Design</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Services;