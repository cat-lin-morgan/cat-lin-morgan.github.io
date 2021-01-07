import React from 'react';
import ProjectTile from './ProjectTile';


function Projects() {

    const applications = [
        {
            website: 'https://sheltered-eyrie-92140.herokuapp.com/',
            github: 'https://github.com/ginomaglaqueucla/get-hitched',
            title: 'Get Hitched!',
            subtitle: 'NODE.JS / HANDLEBARS / EXPRESS',
            description: 'Lead Front End Designer and Front End Engineer. Get Hitched was an experiment in building a fully functional application that was one app for two seperate users.',
            fileName: 'gethitched.png',
            alt: 'Screenshot of the active Get Hitched Website.'
        },
        {
            website: 'https://rawagschal.github.io/spaced-out/',
            github: 'https://github.com/rawagschal/spaced-out',
            title: 'Spaced Out',
            subtitle: 'JAVASCRIPT / CSS / HTML',
            description: 'Lead Front End Designer and Front End Engineer. Spaced Out is a cute Space Fan Website. We used 3rd Party APIs to show our client what lies in the deepest reaches of space.',
            fileName: 'spacedout.gif',
            alt: 'Screenshot of the active Spaced Out Webpage.'
        },
        {
            website: 'https://cat-lin-morgan.github.io/',
            github: 'https://github.com/cat-lin-morgan/cat-lin-morgan.github.io',
            title: 'Cat Lin Portfolio',
            subtitle: 'HTML / CSS / JAVASCRIPT',
            description: 'My website, because I am really proud of it. Recently rebuilt with react. I did all of the graphic design and animations, a true example of my creative and engineering skills.',
            github: '',
            fileName: 'catwebsite.png',
            alt: 'Screenshot of active Cat Lin Portfolio website.'
        },
        {
            website: 'https://cat-lin-morgan.github.io/code-quiz/',
            github: 'https://github.com/cat-lin-morgan/code-quiz',
            title: 'Coding Quiz',
            subtitle: 'JAVASCRIPT / CSS',
            description: 'Short quiz game to quiz challengers on JavScript basics. Built with mostly JavaScript, it was my first experiment with DOM manipulation.',
            fileName: 'codequiz.png',
            alt: 'Screenshot of active Coding Quiz website.'
        },
        {
            website: 'https://github.com/cat-lin-morgan/employee-tracker',
            github: 'https://github.com/cat-lin-morgan/employee-tracker',
            title: 'Employee Tracker',
            subtitle: 'JAVASCRIPT / NODE.JS / SQL',
            description: 'Command Line application that uses command line prompts to help employers keep track of their employees. Build with SQL and MySQL database.',
            fileName: 'employeetracker.png',
            alt: 'Screenshot of command line application.'
        },
        {
            website: 'https://cat-lin-morgan.github.io/weather-dashboard/',
            github: 'https://github.com/cat-lin-morgan/weather-dashboard',
            title: 'Weather Dashboard',
            subtitle: 'JAVASCRIPT / 3rd PARTY API / BOOTSTRAP',
            description: 'A simple weather application. Retrieves data from Open Weather API. Saves to local storage and rendered in the DOM with Bootstrap components.',
            fileName: 'weatherdashboard.png',
            alt: 'Screenshot of Weather Dashboard.'
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
