import React from 'react';

import Education from './Education';
import Resume from './Resume';
import Skills from './Skills';

function Credentials() {
    return(
        <section className='credentials-wrapper'>

            <div className='credentials'>
                <div>
                    <h2 className='section-title'>My Credentials</h2>
                </div>
                <div className='resume-details'>
                    <div className='resume-side'>
                        <Education />
                        <Resume />
                    </div>
                    <Skills />
                </div>
            </div>

        </section>
    )
}

export default Credentials;