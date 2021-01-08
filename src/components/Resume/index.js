import React from 'react';

function Resume() {
    return(
        <section className='resume-wrapper'>


            <div className='resume'>
                <div>
                    <h2 className='section-title'>My Credentials</h2>
                </div>
                <div className='resume-details'>
                    <div>
                        <h3>MERN Stack</h3>
                        <p>
                            I enjoy playing with CSS as much as I enjoy creating APIs.
                        </p>
                        <h3>Frontend</h3>
                        <ul className='skill-list'>
                            <li>HTML/HTML5</li>
                            <li>CSS/CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li><span>Component Libraries:</span> jQuery, Materialze, Bootstrap</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul className='skill-list'>
                            <li>Third Party APIs</li>
                            <li>RESTful APIs</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Databasing:
                                <ul>
                                    <li>SQL</li>
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
                    <div>
                        <p>
                            // Ideally a link to my certifcate for the course will go here<br />
                            UCLA Extension Certifcate for Full Stack Development <br />
                            The 24 week course covered HTML, CSS, JavaScript(ES6 and ES7), Node, Express, Mongo, and React giving me a solid foundation of the MERN stack. 
                        </p>
                        <br /><br />
                        <p>A link to my <a href='/resume.pdf' rel="noreferrer">resume <i className="far fa-file-pdf"></i></a> for download.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Resume;