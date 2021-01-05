import React from 'react';
import aboutImage from '../../assets/images/raincat.png';

function About() {

  return(
    <section id='about-me' className='about-wrapper'>
      <div className='about'>
        <div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div>
          <img 
            src={aboutImage}
            alt='Cat amongst sits among rainbows and smiley faces.'
          />
          <p>
            Hello! I'm good at making things look nice! I am a colorful coder, designer, and artist living in Los Angeles, CA. Born and raised city center, the various scenes of the Los Angeles underground have shaped my unique tastes and palettes.
          </p>
        </div>
      </div>
    </section>
  )
}


export default About;

