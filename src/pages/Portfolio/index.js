import React from 'react';



function Portfolio({title, fileName, description, fileName, alt, website, websiteName}) {
    return (
        <section>
            <div>
                <h3>{title}</h3>
                <img src={require(`../../../assets/images/websites/${fileName}`).default} alt={alt} />
                <p>{description}</p>
                <a href={website} target="_blank" rel="noreferrer">{websiteName}</a>
            </div>
        </section>
    )
}
 

export default Portfolio;
