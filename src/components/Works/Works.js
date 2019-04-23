import React from 'react';
import './Works.css';
import squareShape from '../../images/works/works.png';

const Works = () => {
	return(
		<div id='works'>
			<div className='heading-container brown-background reverse'>
				<div className='text-container cream'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div className='img-container'>
					<img 
						id='headingImg' 
						alt='works' 
						src={squareShape} 
					/>
				</div>
			</div>
		</div>
	);
}

export default Works;