import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"
import photo from "../images/8-bit-head.png"

export default function About() {
  return (
    <div className="content">
      <Name text="about_me>" />

      <p>
        Hello, my name is Paolo, I am a freelance web developer, web designer,
        UI/UX, music compose and digital content.
      </p>
      <section className="arrow">
        <header></header>
      </section>
      <p>
        My <span className="blue">const</span>ant passion in IT and{" "}
        <span className="pink">new</span>{" "}
        <span className="green">Technologies</span>
        <span className="yellow">()</span> give me the possibility to turn my
        hobby into my work.
      </p>
      <div className="loading">
        <img src={photo} alt="profile head" />
      </div>
      <Footer />
    </div>
  )
}
