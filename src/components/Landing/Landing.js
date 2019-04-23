import React from 'react';
import './Landing.css';
import mainLogo from '../../images/landing/huita-closed.png'

const Landing = () => {
	return(
		<div>
			<div className='logo-container'>
				<img id='mainLogo' alt='logo' src={mainLogo} />
			</div>
		</div>
	);
}

export default Landing;