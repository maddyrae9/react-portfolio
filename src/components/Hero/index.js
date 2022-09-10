import React from 'react';
const Hero = () => {
  return (
    <section id="Home" className="hero">
      <div className="oct">
        <div>
          <span className="hero-bg">
            <p>
              Hello, I'm <span> Madison Mulligan</span>
            </p>
            <p>Full-stack web developer.</p>
            <a href="#Portfolio">
              <button
                className="btn-1">
                Recent Projects
              </button>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;