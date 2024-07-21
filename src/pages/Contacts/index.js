import React from "react";

function Contacts() {
    return (
        <section>
            <div className='contact-div'>
                <div className='social-media'>
                    <ul>
                        <li>
                            <a href='https://github.com/cat-lin-morgan' target="_blank" rel="noreferrer">
                                <i className="fab fa-github social-i"></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/cat-morgan-7818901b2/' target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin social-i"></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/cattongues.svg' target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram social-i"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Email :<a className='hover' href="mailto:plummorgan@gmail.com"> plummorgan@gmail.com</a><br />
                    Phone # :<a className='hover' href="tel:323-713-6089"> (323) 713 - 6089</a><br />
                    Thanks for reaching out!<br />
                    <i className="far fa-smile"></i>
                </p>
            </div>
        </section>
    )
}

export default Contacts;