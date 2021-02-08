import React from 'react';

function Resume() {
    return(
        <section className='resume-wrapper'>

            <div className='resume'>
                <div>
                    <h2 className='section-title'>My Credentials</h2>
                </div>
                <div className='resume-details'>
                    <div className='resume-side'>
                        <div className='education-wrapper'>
                            <h3>☙Education</h3>
                                <h4>UCLA Extension Certifcate for Full Stack Development</h4>
                                <p className='education-p'>
                                    The 24 week course covered HTML, CSS, JavaScript(ES6 and ES7), Node, Express, Mongo, and React giving me a solid foundation of the MERN stack. 
                                    <br /><br />Graduated recently, as soon as I receive my Certifcate, I'll add it right here.
                                </p>
                                <h4>Los Angeles Community College</h4>
                                <p className='education-p'>
                                    I attended my local community college part time straight out of high school. Over the course of four years took all of the courses they had available for Fine Arts. My focus was not to graduate, but to round out my creative skill set. The skills I gained during this time directly influneced my direction in Web Development and translated surprisingly well. Illustration, Animation, Graphic Design, Printmaking were among the courses I took.
                                </p>
                        </div>
                        <div className='pdf-wrapper'>
                            <h3>☙Resume</h3>
                            <p className='pdf-p'>
                                <a href='/resume.pdf' rel="noreferrer">
                                    <i className="far fa-file-pdf resume-pdf"></i>
                                </a>
                                <br /><br />
                                <small>Click the icon above to download a PDF of my resume.</small>
                            </p>
                        </div>
                    </div>
                    <div className='skills-wrapper'>
                        <div className='skills-section'>
                            <h3>Frontend</h3>
                            <ul className='skill-list'>
                                <li>HTML/HTML5</li>
                                <li>CSS/CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Handlebars</li>
                                <li>GraphQL</li>
                                <li>Libraries:
                                    <ul>
                                        <li>jQuery</li>
                                        <li>Materialze</li>
                                        <li>Bootstrap</li>
                                        <li>Chroma.js</li>
                                    </ul>
                                </li>
                                <li>Third Party APIs:
                                    <ul>
                                        <li>React-Color</li>
                                        <li>Cloudinary</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='skills-section'>
                            <h3>Backend</h3>
                            <ul className='skill-list'>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Apollo</li>
                                <li>RESTful APIs</li>
                                <li>Databasing:
                                    <ul>
                                        <li>SQL / SQLite</li>
                                        <li>MySQL</li>
                                        <li>JawsDB for SaaS</li>
                                        <li>MongoDB</li>
                                        <li>MongoDB Atlas w/ AWS</li>
                                    </ul>
                                </li>
                                <li>ORMs and ODMs:
                                    <ul>
                                        <li>Sequelize</li>
                                        <li>Mongoose</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='skills-section'>
                            <h3>Other</h3>
                            <ul className='skill-list'>
                                <li></li>
                                <li></li>
                                <li>Adobe After Effects</li>
                                <li>Adobe Photoshop</li>
                                <li>WIX Website Builder</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Resume;