import React from 'react'
import weather from "../../assets/weather-app.png";

export default function Weather() {
  return (
    <div className="card">
     <div className="imgBx">
        <img src={weather} alt="" />
        </div>  
        <div className="content">
           <div className="details">
                <h2>Weather Application <br/><span>JavaScript HTML CSS</span></h2>
                <div className="data">
                    <p>The website accepts user's request of desired location and send data to API and show the
                    weather info of same location with good user interface.</p>

                </div>
                
                <div className="actionBtn">
                    <a href="www.github.com" className="button button--flex">
                    GitHUb
                    </a>
                    <a href="www.github.com" className="button button--flex">
                    Live
                    </a>
                </div>
            </div> 
        </div> 
    </div>
  )
}
