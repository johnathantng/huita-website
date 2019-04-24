import React from 'react';
import './Works.css';
import sampleOne from '../../images/works/iconsample1.png';
import sampleTwo from '../../images/works/iconsample2.png';
import sampleThree from '../../images/works/iconsample3.png';
import sampleFour from '../../images/works/iconsample4.png';


const Works = () => {
	return(
		<div id='works'>
			<div className='heading-container white-background reverse'>
				<div className='sample-container'>
					<img id='sampleImg' alt='sample-images' src={sampleOne} />
					<img id='sampleImg' alt='sample-images' src={sampleTwo} />
					<img id='sampleImg' alt='sample-images' src={sampleThree} />
					<img id='sampleImg' alt='sample-images' src={sampleFour} />
				</div>
				<div className='works-heading'>
					Works
				</div>
			</div>
		</div>
	);
}

export default Works;