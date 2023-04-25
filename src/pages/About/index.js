import React from "react";
import aboutImage from "../../assets/images/my_face.png";

function About() {
  return (
    <section>
      <img class="cat-face" src={aboutImage} alt="Cat's face smiling." />
      <p>
        As a web developer, you likely have experience designing, building, and
        maintaining websites and web applications. You may be skilled in
        programming languages such as HTML, CSS, JavaScript, and PHP, and have
        experience with web development frameworks and content management
        systems. Additionally, you may be familiar with responsive design,
        cross-browser compatibility, and web accessibility standards. It's also
        possible that you have experience with front-end libraries and
        frameworks such as React.js, Angular.js, and Vue.js. 
        
        "I am a highly
        motivated and skilled web developer with a passion for creating visually
        appealing and user-friendly websites. I have experience in a variety of
        programming languages, including HTML, CSS, JavaScript, and PHP. I am
        well-versed in responsive design and have a strong understanding of the
        latest web development trends and technologies. I am dedicated to
        producing high-quality work and am always looking for new challenges and
        opportunities to improve my skills."
      </p>
    </section>
  );
}

export default About;
