import React from "react";
import javiResume from "../assets/JaviResume.pdf";
import "../index.css"

function Resume(){
    return (
        <div>
            <section className="middle">
               <h2>My Proficiencies</h2>
            <ul id="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Reactjs</li>
            </ul>
            <a id="resDl" src={javiResume} href={javiResume} download={"Javi Alvarez Resume.pdf"}>Click here to download my resume!</a> 
            </section>
            
        </div>
    )
}
    
export default Resume