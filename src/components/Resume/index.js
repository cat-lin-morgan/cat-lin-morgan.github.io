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
                        <p>
                            I enjoy playing with CSS as much as I enjoy creating APIs.
                        </p>
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML/HTML5</li>
                            <li>CSS/CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li><span>Component Libraries:</span> jQuery, Materialze, Bootstrap</li>
                        </ul>
                        <h3>Backend</h3>
                        <ul>
                            <li>Third Party APIs</li>
                            <li>RESTful APIs</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li><span>Databases:</span> SQL, MySQL, MongoDB</li>
                            <li><span>ORMs and ODMs:</span> Sequelize and Mongoose</li>
                        </ul>
                    </div>
                    <div>
                        <p>Ideally a link to my certifcate for the course will go here</p>
                        <p>A link to my <a href='https://docs.google.com/document/d/1asTHNk8Z6WGT9Tjgc_RsqjCUr5Ns9dKNCx_IQ_S9UqI/edit?usp=sharing' rel="noreferrer">resume PDF</a> for download.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Resume;