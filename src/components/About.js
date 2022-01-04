import React from "react"
import Name from "../components/Name"
import photo from "../images/8-bit-head.png"

export default function About() {
  return (
    <div className="content">
      <Name text="about_me>" />

      <p>
        Hello, my name is Paolo, I am a freelance web developer, web designer,
        UI/UX, music composer and digital content creator.
      </p>
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
      <p style={{ fontSize: 5 }}>
        <span role="img" aria-label="P">
          🅿️
        </span>
        <span role="img" aria-label="A">
          🅰️
        </span>
        <span role="img" aria-label="O">
          📀
        </span>{" "}
        <span role="img" aria-label="L">
          🛴
        </span>
        <span role="img" aria-label="O">
          📀
        </span>{" "}
      </p>
      <p style={{ fontSize: 5 }}>
        <span role="img" aria-label="D">
          🌛
        </span>
        <span role="img" aria-label="E">
          📧
        </span>
        <span role="img" aria-label="V">
          🖖
        </span>
        <span role="img" aria-label="E">
          📧
        </span>
        <span role="img" aria-label="B">
          🅱️️
        </span>
      </p>
    </div>
  )
}
