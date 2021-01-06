import React from 'react';

export const pages = [
    {
        id: 'homepage',
        name: 'About Me'
    },
    {
        id: 'projects',
        name: 'My Work'
    },
    {
        id: 'contacts',
        name: 'How To Reach Me'
    }
];


function Nav({ currentPage, setCurrentPage }) {

    function getClassName(page) {
        return page === currentPage ? 'active' : '';
    }

    return(
        <header>
            <h1>Cat Lin Morgan</h1>
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