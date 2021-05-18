import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"
import photo from "../images/8-bit-head.png"

export default function About() {
  return (
    <div className="content">
      <Name path="about_me>" />
      <p>
        Hello, my name is Paolo, I am a freelance web developer, web designer,
        UI/UX and music composed.
      </p>
      <p>
        The programming languages that I use include JavaScript, HTML5, CSS3 and
        Java.
      </p>
      <div className="loading">
        <img src={photo} alt="profile photo" />
      </div>
      <Footer />
    </div>
  )
}
