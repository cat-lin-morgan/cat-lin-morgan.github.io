import React from 'react';

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
            <h1>this is the nav header :)</h1>
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
        </header>
    )
}

export default Nav;