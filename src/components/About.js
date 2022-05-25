import React, { useEffect, useState } from "react"
import Name from "../components/Name"
import photo from "../images/8-bit-head.png"

export default function About() {
  const [pic, setPic] = useState(photo)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPic("#!")
    }, 2000)

    const timer2 = setTimeout(() => {
      setPic(photo)
    }, 6500)

    return () => {
      clearTimeout(timer1)
      return clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="content">
      <Name text="about_me" />

      <p>
        Hello, my name is Paolo, I am a freelance web developer, web designer,
        UI/UX developer, music composer and digital content creator.
      </p>
      <p>
        My <span className="blue">const</span>ant study and passion in IT and{" "}
        <span className="pink">new</span>{" "}
        <span className="green">Technologies</span>
        <span className="yellow">()</span> give me the possibility to turn my
        hobby into my work.
      </p>
      <div className="loading">
        <img
          src={pic}
          alt="__FAKE LOW CONNECTION, NO WORRIES! I'M JUST A NOSTALGIC OF THE SLOWER LOADING TIME :D"
        />
      </div>
      <p></p>
    </div>
  )
}
