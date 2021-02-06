import React from 'react';

function Resume() {
    return(
        <section className='resume-wrapper'>

            <div className='resume'>
                <div>
                    <h2 className='section-title'>My Credentials</h2>
                </div>
                <div className='resume-details'>
                    <p>
                        I enjoy playing with CSS as much as I enjoy creating APIs.
                    </p>
                    <div className='resume-side'>
                        <h4>
                            
                        </h4>
                        <p className='resume-p'>
                            <span className='resume-p-span'>UCLA Extension Certifcate for Full Stack Development</span>
                            The 24 week course covered HTML, CSS, JavaScript(ES6 and ES7), Node, Express, Mongo, and React giving me a solid foundation of the MERN stack. <br />
                            <br />Graduated recently, as soon as I receive my Certifcate, I'll add it below with my resume.
                        </p>
                        <p className='pdf-p'>
                            Click the icon below to download a PDF of my resume. <br/>
                            <a href='/resume.pdf' rel="noreferrer"><i className="far fa-file-pdf resume-pdf"></i></a>
                        </p>
                    </div>
                    <div className='skills-wrapper'>
                        <div className='skills-section'>
                            <h3>Frontend</h3>
                            <ul className='skill-list'>
                                <li>HTML/HTML5</li>
                                <li>CSS/CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
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