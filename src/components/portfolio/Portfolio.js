import React from 'react'
import Bbms from './Bbms'
import './portfolio.css';
import Snake from './Snake';
import Weather from './Weather';

export default function Portfolio() {
  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section__title">Projects</h2>
        {/* <span className="section__subtitle">My Personal Projects</span> */}
        <span className="section__subtitle"></span>
        <div className="portfolio__container container grid">
        <Bbms/> 
        <Weather/>
        <Snake/>
        </div>
        

    </section>
  )
}
