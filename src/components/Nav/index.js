import React from 'react';
import navIcon from '../../assets/images/icons/dummy-icon-small.png';

export const pages = [
    {
        id: 'homepage',
        name: 'Home'
    },
    {
        id: 'about',
        name: 'About'
    },
    {
        id: 'projects',
        name: 'Projects'
    },
    {
        id: 'resume',
        name: 'Resume'
    }
];




function Nav({ currentPage, setCurrentPage }) {

    function getClassName(page) {
        return page === currentPage ? 'active' : '';
    }

    return(
        <header>
            <h2>nav</h2>
            <nav>
                <ul>
                    {
                        pages.map((page) => (
                            <li key={page.id} className={getClassName(page.id)} onClick={
                                () => {
                                    setCurrentPage(page.id);
                                    document.title = page.name;
                                }
                            }>
                                {page.name}
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <img 
                class= 'cat-icon'
                src= {navIcon} 
                alt= 'Cat Icon winking and making peace sign with halo on cat head.'
            />
        </header>
    )
}

export default Nav;