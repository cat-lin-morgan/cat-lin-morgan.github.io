import React from 'react';

function ProjectTile({website, github, title, subtitle, description, fileName, alt}) {

    return(
        <div className='project-tile-wrapper'>
            <div className="project-tiles">
                <figure>
                    <a href={website} target="_blank" rel="noreferrer">
                        <img src={require(`../../../assets/images/websites/${fileName}`).default} alt={alt} />
                        <figcaption>
                            <i className="fas fa-external-link-alt"></i>
                        </figcaption>
                    </a>
                </figure>

            </div>
            <div className='project-text'>
                <h3>{title}</h3>
                <small>{subtitle}</small><br />
                <a href={github}><i className="fab fa-github"></i> Github Repo</a>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectTile;