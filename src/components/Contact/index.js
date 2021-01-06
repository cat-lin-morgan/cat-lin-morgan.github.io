import React from 'react';

function ContactForm() {

    return(
        <section className='contact-wrapper'>
            <div className='contacts'>
                <div>
                    <h2 className='section-title'>Contact Me</h2>
                </div>
                <div className='form'>
                    <form >
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' />
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' name='email' />
                        </div>
                        <div>
                            <label htmlFor='message'>Message:</label>
                            <textarea name='message' rows='5' />
                        </div>
                        <button type='submit' className='btn'>Submit <i className="fas fa-smile"></i></button>
                    </form>
                </div>
                <div>
                    <p>
                        Email :<a href="mailto:plummorgan@gmail.com"> plummorgan@gmail.com</a><br />
                        Phone # :<a href="tel:323-713-6089"> (323) 713 - 6089</a><br />
                        Thanks for reaching out!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;