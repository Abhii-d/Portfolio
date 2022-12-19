import React from 'react'
import snake from "../../assets/snake.png";

export default function Snake() {
  return (
    <div className="card">
     <div className="imgBx">
        <img src={snake} alt="" />
        </div>  
        <div className="content">
           <div className="details">
                <h2>Snake Game<br/><span>JavaScript HTML CSS</span></h2>
                <div className="data">
                    <p>Traditional Snake Game.we can play traditional game.</p>

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
