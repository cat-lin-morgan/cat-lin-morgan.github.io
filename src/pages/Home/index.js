import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

import catLinBanner from "../../assets/images/icons/cat_lin_banner.png";



function Home() {
    return (
        <section className="home-section">
            <div>
                     <img class="banner-image" src={catLinBanner} alt="Banner that says Cat Lin Design. With subtext saying, web design, tattooing, content creation, graphics." />
            </div>
            <div>
                I’m a pretty cool human with a passion for learning and experimentation. I love combining my visual design skills with coding to create beautiful and useful software. I’m just as at home building an API as I am polishing the aesthetic details of a feature with CSS.
            </div>
            <div>
                <h3>Be sure to check out my Tattoo Account.</h3>
                <p>Booking can be made with DM to @cat_lin_tattoo ~!</p>
                <p>I do flash tattoos and custom designs in American Traditional Style.</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/C7w366gvU3X/?img_index=1" width={328} />
                </div>
            </div>
        </section>
    )
}

export default Home;