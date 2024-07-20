// this is each project and the object that contains them

    const applications = [
        {
            website: 'https://color-theory.herokuapp.com/',
            websiteName: 'Color Theory',
            title: 'Color Theory',
            description: 'Lead Front End Designer and Front End Engineer. Color Theory was an idea I had for quite some time. For myself it was an exploration of React and CSS and really helped me understand both in ways I had not before.',
            fileName: 'colortheory.png',
            alt: 'Screenshot of the Color Theory Website.',
        },
        {
            website: 'https://cat-lin-morgan.github.io/code-quiz/',
            github: 'https://github.com/cat-lin-morgan/code-quiz',
            title: '☙Coding Quiz',
            subtitle: 'JAVASCRIPT / CSS',
            description: 'Short quiz game to quiz challengers on JavScript basics. Built with mostly JavaScript, it was my first experiment with DOM manipulation.',
            fileName: 'codequiz.png',
            alt: 'Screenshot of active Coding Quiz website.'
        }
     ]

    return(
        <div>
        {
            applications.map((application) => (
                <Project key={application.title} {...application} />
            ))
        }
        </div>
    )