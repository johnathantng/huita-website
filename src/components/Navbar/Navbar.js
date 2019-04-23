import React from 'react';
import './Navbar.css';

const Navbar = () => {

	const classToggle = () => {
		const navs = document.querySelectorAll('.navbar-container')
		navs.forEach(nav => nav.classList.toggle('navbar-container-show'));
		console.log('changed');
	}

	return(
		<div>
			<div id='nav' className='navbar'>
				<div onClick={classToggle} className='hamburger-icon'>
					&#9776;
				</div>
				{/* NAVBAR */}
				<div className='navbar-container slide-down'>
					<div className='navbar-items'>
						Mission
					</div>
					<div className='navbar-items'>
						Work
					</div>
					<div className='navbar-items'>
						Services
					</div>
					<div className='navbar-items'>
						Contact
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;