import React from "react";
import aboutImageOne from "../../assets/images/my_face.png";


function About() {
  return (
    <section className="about-section">
      <div className="about-page-wrapper">
        <div class="first-about-paragraph">
          <img class="cat-face" src={aboutImageOne} alt="Cat's face smiling." />
          <p>         
            "I am a highly motivated and skilled web developer with a passion for creating visually appealing and user-friendly websites.
            I have experience in a variety of programming languages, including HTML, CSS, JavaScript, and PHP.
            I am well-versed in responsive design and have a strong understanding of the
            latest web development trends and technologies.
            I am dedicated to producing high-quality work and am always looking for new challenges and opportunities to improve my skills."
          </p>
          <p>
            "I am currently studying tattooing and old school tattoo design.
            Along with this, I have been redeveloping my drawing skills.
            It has been refreshing to revisit an old love and allow this new design style to influence my overall design principles."
          </p>
        </div>
        <div class="second-about-paragraph">
          {/* <img class="cat-bod" src={aboutImageTwo} alt="Cat at the Ren Faire" /> */}
          <p>
            "I originally attended Los Angeles Community College. I was here I took my formal art and design classes. 
            I really enjoyed my Illustration and Printmaking classes.
            It was here that I realized I loved design far more than fine art.
            I think it were these moments that led to where I am today."
          </p>
          <p>
            "In the summer of 2020, during the height of the Covid 2019 lockdown, I decided to spend the downtime going back to school.
            I took a Coding Bootcamp. 
            I wasnt sure what to except and honestly, could have flopped in the intense envirnment.
            I found instead that I was a natural.
            Coding and design came quite easily to me."
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
