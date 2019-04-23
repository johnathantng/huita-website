import React from 'react';
import circleShape from '../../images/mission/mission.png';

const Mission = () => {
	return(
		<div id='mission'>
			<div className='heading-container'>
				<div className='img-container'>
					<img 
						id='headingImg' 
						alt='mission' 
						src={circleShape} 
					/>
				</div>
				<div className='text-container'>
					Huita Studios strives to design for others in an innovative way 
					that tailors to each user. We value not only authenticity, 
					but the story behind each user that makes them unique. 
					We believe in creating new experiences by embracing what they already know, 
					challenging the unexpected and kindling their imagination.
				</div>
			</div>
		</div>
	);
}

export default Mission;