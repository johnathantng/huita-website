import React from 'react';
import './Mission.css';
import circleShape from '../../images/mission/mission.png';

const Mission = () => {
	return(
		<div id='mission'>
			<div className='mission-container'>
				<div className='img-container'>
					<img 
						id='squareImg' 
						alt='square' 
						src={circleShape} 
					/>
				</div>
				<div className='text-container'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>
	);
}

export default Mission;