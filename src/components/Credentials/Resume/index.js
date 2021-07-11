import React from 'react';

function Resume() {
    return(
        <div className='pdf-wrapper'>
            <h3>☙Resume</h3>
            <p className='pdf-p'>
                <a href='/resume.pdf' target='_blank' rel="noreferrer">
                    <i className="far fa-file-pdf resume-pdf"></i>
                </a>
                <br /><br />
                <small>Click the icon above to download a PDF of my resume.</small>
            </p>
        </div>

    )
}

export default Resume;