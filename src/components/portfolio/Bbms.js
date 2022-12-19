import React from 'react'
import bbms from "../../assets/blood-bank.png";

export default function Bbms() {
  return (
    <div className="card">
     <div className="imgBx">
        <img src={bbms} alt="" />
        </div>  
        <div className="content">
           <div className="details">
                <h2>Blood Bank Management System <br/><span>PHP MySQL HTML CSS</span></h2>
                <div className="data">
                    <p>A website to store the data of the customers who have donated the blood, to store the amount
                    and type of blood available in stock.</p>

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
