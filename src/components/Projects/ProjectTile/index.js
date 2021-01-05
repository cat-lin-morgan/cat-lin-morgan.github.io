import React from 'react';

function ProjectTile({website, title, subtitle, description, fileName, alt}) {

    return(
        <div className='project-tile-wrapper'>
            <div className="project-tiles">
                <figure>
                    <a href={website} target="_blank">
                        <img src={require(`../../../assets/images/websites/${fileName}`).default} alt={alt} />
                        <figcaption>
                            <i class="fas fa-external-link-alt"></i>
                        </figcaption>
                    </a>
                </figure>

            </div>
            <div className='project-text'>
                <h3>{title}</h3>
                <small>{subtitle}</small><br />
                <a href='{}'><i class="fab fa-github"></i> Github</a>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectTile;