import React from 'react';
import './Contact.css';
import triangleShape from '../../images/contact/connected.png';

const Contact = () => {
	return(
		<div id='contact'>
			<div className='works-container'>
				<div className='text-container'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div className='img-container'>
					<img 
						id='triangleImg' 
						alt='triangle' 
						src={triangleShape} 
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact;