import React from "react";
import "../index.css";
import weather from "../assets/weatherdashboard2.png";
import quiz from "../assets/quizscreenshot.png";
import pwgen from "../assets/pwgen.png";
import accessibility from "../assets/mod1screenshot.png"
import foodgram from "../assets/foodgram.png";
import secretsauce from "../assets/secretsauce.png";
import moodify from '../assets/mcubedlogo.png'

function Portfolio(){
    const portfolio =[
        {
            name: "Weather Dashboard",
            imgsrc: weather,
            link: "https://bobascript.github.io/weather-dashboard/",
            repo: "https://github.com/bobascript/weather-dashboard"
        },
        {
            name: "Code Quiz",
            imgsrc: quiz,
            link: "https://bobascript.github.io/4-code-quiz/",
            repo: "https://github.com/bobascript/4-code-quiz"
        },
        {
            name: "Password Generator",
            imgsrc: pwgen,
            link: "https://bobascript.github.io/password-generator-fixed/",
            repo: "https://github.com/bobascript/password-generator-fixed"
        },
        {
            name: "Match My Mood",
            imgsrc: moodify,
            link: "https://bobascript.github.io/Module-20-Challenge/",
            repo: "https://github.com/bobascript/Module-20-Challenge"
        },
        {
            name: "Foodgram",
            imgsrc: foodgram,
            link: "https://bulkacity.github.io/foodgram/",
            repo: "https://github.com/bulkacity/FoodGram"
        },
        {
            name: "Secret Sauce",
            imgsrc: secretsauce,
            link: "https://damp-river-14558.herokuapp.com/",
            repo: "https://github.com/graciaan/SecretSauce"
        },
        

    ]

    return (
        <div>
            <section className="middle">
             <h2>My Work</h2>
            <div id="portitem">
                {portfolio.map((portfolio) => (
                    <div key={portfolio.name}>
                        <div className="card"
                            style={{ backgroundImage: `url(${portfolio.imgsrc})` }}>
                            <a target="_blank" href={portfolio.link}>{portfolio.name}</a>
                            <a target="_blank" href={portfolio.repo}>Github</a>
                        </div>
                    </div>
                ))}
            </div>   
            </section>
            
        </div>
    )
}

export default Portfolio