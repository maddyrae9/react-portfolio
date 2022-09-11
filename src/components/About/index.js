import React from 'react';
import profilePhoto from '../../assets/images/profile.jpeg'

const About = () => {
    return (
        <section id="About Me">
            <h2 className="about-title mx auto">About Me</h2>
            <div className="fact-title-border mx auto"></div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-7 d-flex align-items-center bio'>
                    </div>
                </div>
                <address className="mt-3">
                    <h5>
                        Want to contact me?
                    </h5>
                    <a href="email:madisonmulligan97@gmail.com">
                        madisonmulligan97@gmail.com
                    </a>
                </address>
                <img
                className="profile-pic"
                src={profilePhoto}
                alt="profile" />
            </div>
            <div className="bio">
                <h3 className="mt-4">Who am I?</h3>
                <div className="bio-title-border mx-auto"></div>
            <p className="container my-4 px-5">
                I am a hardworker who has been dedicated to learning web development. I got my certificate from University of Central Florida where I learned HTML, CSS, Javascript, React, and databases. I am a full-stack web developer excited to begin my career. I am excited to be apart of a career that I can constantly learn new things to make me a better developer.
            </p>
            </div>
        </section>
    )
}

export default About;