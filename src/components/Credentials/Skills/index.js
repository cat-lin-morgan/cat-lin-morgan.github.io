import React from 'react';

function Skills() {
    return (
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
    )
}

export default Skills;