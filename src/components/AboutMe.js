import React from 'react';
import Pfp from "../assets/Pfp.png";
import "../index.css"

function AboutMe() {
    return (
        <section id="middle">
            <h2 style={{textAlign:"center",textDecoration:"underline"}}>About Me</h2>
            <div id="aboutme">
                <img id="pfp" src={Pfp} alt="A profile icon of a stylized drawing of Javier" />
                <p id="bio">Hello! My name is Javi, I am 22 years old and am a soon-to-be full stack web dev from Florida! I grew up here my entire life and have been in this bootcamp for nearly 6 months! I cant believe how close I am to graduation! A few things about me, I have a cat named Tina and she loves to hop all over my keyboard while im coding! I am very into video games, lately I have mainly been into Pokemon. I have a few Pokemon related coding projects planned so keep an eye out for those on this portfolio soon :3 </p>
            </div>
        </section>
    );
}

export default AboutMe;