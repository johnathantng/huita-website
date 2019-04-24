import React from 'react';
import './Contact.css';
import triangleShape from '../../images/contact/connected.png';
import emailIcon from '../../images/contact/envelope.png';
import linkedinIcon from '../../images/contact/linkedin.png';
import fiverrIcon from '../../images/contact/fiverr.png';
import instagramIcon from '../../images/contact/instagram.png';

const Contact = () => {
	return(
		<div id='contact'>
			<div className='heading-container brown-background reverse'>
				<div className='contact-container'>
					<a target='_blank' rel="noopener noreferrer" href='mailto:huita.studios@gmail.com'>
						<img id='contactIcons' alt='email-icon' src={emailIcon} />
					</a>
					<a target='_blank' rel="noopener noreferrer" href='https://linkedin.com/in/huita-studios-817135184'> 
						<img id='contactIcons' alt='email-icon' src={linkedinIcon} /> 
					</a>
					<a target='_blank' rel="noopener noreferrer" href='https://www.fiverr.com/huitastudios/'>
						<img id='contactIcons' alt='email-icon' src={fiverrIcon} />
					</a>
					<a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/huita.studios/'> 
						<img id='contactIcons' alt='email-icon' src={instagramIcon} /> 
					</a>
				</div>
				<div className='img-container'>
					<img 
						id='headingImg' 
						alt='contact' 
						src={triangleShape} 
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact;