import React, {useState} from "react";
import "../index.css"
import { validateEmail } from "../utilities/utils";

function ContactForm(){
    const [formState,setFormState]=useState({name:"",email:"",message:""})

    const [errorState, setErrorState]=useState("")
    const{name,email,message}=formState

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!errorState){
            setFormState({ [e.target.name]: e.target.value})
            console.log('Form',formState)
        }
    }

    const handleChange=(e)=>{
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorState("Your email is invalid.")
            } else {
                setErrorState("")
            }
        } else {
            if (!e.target.value.length) {
                setErrorState(`${e.target.name} is required to submit.`)
            } else {
                setErrorState("")
            }
        }
    }
    return(
        <section className="middle">
            <h2>Get in Touch!</h2>
            <form id="contact" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorState && (
                    <div>
                        <p className="error-text">{errorState}</p>
                    </div>
                )}
                <button id="submitBtn" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm