import React from 'react';
import './About.css'
import bgOne from '../../Assets/my-bg.png'
const About = () => {
    return (
        <div className='container d-flex  align-items-center'>
            <div className='col-lg-7'>
                <img className='bg-one img-fluid mt-5' src={bgOne} alt='bg1'/>
            </div>
            <div className='col-lg-5'>
                <h1 className='fw-bold'>Know More About <br/><span className='orange'>The Company Owner</span></h1>
                <h6>The owner always try to give his clint's best survices in town. We Have more platform to follow.</h6>
            </div>
        </div>
    );
};

export default About;