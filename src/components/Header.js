import React from 'react'
import {Link} from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg'

export function Header() {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterreneran restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button aria-label='On Click'>Reserve a Table</button>
                    </Link>
                </div>

                {/* Banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='Banner' ></img>
                </div>
            </section>
        </header>
    )
}