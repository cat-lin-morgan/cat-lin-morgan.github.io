import React from 'react';

function Portfolio({ title, fileName, description, alt, website, websiteName }) {
  return (
    <section>
      <div>
        <h3>{title}</h3>
        <img src={require(`../../assets/images/websites/${fileName}`).default} alt={alt} />
        <p>{description}</p>
        <a href={website} target="_blank" rel="noreferrer">{websiteName}</a>
      </div>
    </section>
  );
}

// Applications data
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
    websiteName: 'Coding Quiz',
    title: '☙Coding Quiz',
    description: 'Short quiz game to quiz challengers on JavaScript basics. Built with mostly JavaScript, it was my first experiment with DOM manipulation.',
    fileName: 'codequiz.png',
    alt: 'Screenshot of active Coding Quiz website.',
  }
];

function PortfolioSection() {
  return (
    <div>
      {
        applications.map(application => (
          <Portfolio key={application.title} {...application} />
        ))
      }
    </div>
  );
}

export default PortfolioSection;
