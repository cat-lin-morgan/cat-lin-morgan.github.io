import React, { useEffect, useRef } from 'react';

const coverStart = 50;
const coverEnd = 600;

function Cover() {

    const coverEl = useRef()

    function handleScroll() {
        if (!coverEl.current) {
            return;
        }
        const scrollY = window.scrollY;
        if (scrollY > coverStart && scrollY < coverEnd) {
            const opacity = (scrollY - coverStart) / (coverEnd - coverStart);
            // console.log(opacity, scrollY);
            coverEl.current.setAttribute('style', `opacity: ${1 - opacity}`);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <div className='cover-empty'/>
            <section ref={coverEl} className='cover'/>
        </>
    )
}

export default Cover;