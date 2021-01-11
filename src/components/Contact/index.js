import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [ contactState, setContactState ] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );

    const { name, email, message } = contactState;

    const [ errorMessage, setErrorMessage ] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('An email is required to send me a message!')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required stuff!`)
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setContactState({ ...contactState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    
    return(
        <section className='contact-wrapper'>
            <div className='contacts'>
                <div>
                    <h2 className='section-title'>Contact Me</h2>
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'>Name:</label><br />
                            <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label><br />
                            <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor='message'>Message:</label><br />
                            <textarea name='message' defaultValue={message} rows='5' onBlur={handleChange}/>
                        </div>
                        <button type='submit' className='btn'>Submit <i className="fas fa-smile"></i></button>
                    </form>
                    {
                        errorMessage && (
                            <div>
                                <p >{errorMessage}</p>
                            </div>
                        )
                    }
                </div>
                
                <div className='contact-number'>
                    <p>
                        Email :<a className='hover' href="mailto:plummorgan@gmail.com"> plummorgan@gmail.com</a><br />
                        Phone # :<a className='hover' href="tel:323-713-6089"> (323) 713 - 6089</a><br />
                        Thanks for reaching out!<br />
                        <i className="far fa-smile"></i>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;