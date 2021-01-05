import React from 'react';
import ProjectTile from './ProjectTile';


function Projects() {

    const applications = [
        {
            website: 'https://sheltered-eyrie-92140.herokuapp.com/',
            title: 'Get Hitched!',
            subtitle: 'NODE.JS / HANDLEBARS / EXPRESS',
            description: 'Lorem ipsum',
            fileName: 'gethitched.gif',
            alt: 'Screenshot of the active Get Hitched Website.'
        },
        {
            website: 'https://rawagschal.github.io/spaced-out/',
            title: 'Spaced Out',
            subtitle: 'JAVASCRIPT / CSS / HTML',
            description: 'Lorem ipsum',
            fileName: 'spacedout.gif',
            alt: 'Screenshot of the active Spaced Out Webpage.'
        },
        {
            website: 'https://cat-lin-morgan.github.io/',
            title: 'Cat Lin Portfolio',
            subtitle: 'HTML / CSS / JAVASCRIPT',
            description: 'Lorem ipsum',
            fileName: 'catwebsite.png',
            alt: 'Screenshot of active Cat Lin Portfolio website.'
        },
        {
            website: 'https://cat-lin-morgan.github.io/code-quiz/',
            title: 'Coding Quiz',
            subtitle: 'JAVASCRIPT / CSS',
            description: 'Lorem ipsum',
            fileName: 'codequiz.png',
            alt: 'Screenshot of active Coding Quiz website.'
        },
        {
            website: 'https://github.com/cat-lin-morgan/employee-tracker',
            title: 'Employee Tracker',
            subtitle: 'JAVASCRIPT / NODE.JS / SQL',
            description: 'Lorem ipsum',
            fileName: 'employeetracker.png',
            alt: 'Screenshot of command line application.'
        }
    ]

    return(
        <section className='projects-wrapper'>
            <div className='projects'>
                <div>
                    <h2 className="section-title">My Work</h2>
                </div>
                <div>
                {
                    applications.map((application) => (
                        <ProjectTile key={application.title} {...application} />
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default Projects;
