import React from 'react'

const Info = () => {

    return (

        <div className="about__info grid">

            <div className="about__box">
                <i class='bx bx-award about__icon'></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1+ years practicing</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt'></i>

                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">5+ projects</span>
            </div>

            <div className="about__box">
                <i class='bx bx-support'></i>
                <h3 className="about__title">Data Structure </h3>
                <span className="about__subtitle">100+ Problems</span>
            </div>

        </div>

    )
}


export default Info