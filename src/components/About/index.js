import React from 'react';
import profilePhoto from '../../assets/images/profile.jpeg';

const About = () => {
    return (
        <section id="About Me">
            <div className="container">
                <div className="row">
                    <div className='col-lg-7 d-flex align-items-center bio'>
                    </div>
                <div className="bio-title">
                <h2>About Me</h2>
                </div>
                </div>
                <img
                className="profile-pic"
                src={profilePhoto}
                alt="profile" ></img>
            <div className="bio"> 
            <p className="container my-4 px-5">
                I am a hardworker who has been dedicated to learning web development. I got my certificate from University of Central Florida where I learned HTML, CSS, Javascript, React, and databases. I am a full-stack web developer excited to begin my career. I am excited to be apart of a career that I can constantly learn new things to make me a better developer.
            </p>
            
            </div>
            </div>
        </section>
        
    )
}
export default About;