import React from 'react'

export default function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Computer Engineer</h3>
            <span className="about__subtitle">Degree BE-comp 2023 passout</span>
        </div>

        <div className="about__box">
        <i className='bx bx-code-curly about__icon'></i>

            <h3 className="about__title">web developer</h3>
            <span className="about__subtitle">10+ projects</span>
        </div>

        <div className="about__box">
        <i className='bx bx-trophy about__icon' ></i>

            <h3 className="about__title">Programer</h3>
            <span className="about__subtitle">500+ problem solved.</span>
        </div>
    </div>
  )
}
