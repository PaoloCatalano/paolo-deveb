import React from "react"
import { useGlobalContext } from "../context/context"
import { Link } from "gatsby"
export default function Navbar() {
  const {
    isAboutOpen,
    setIsAboutOpen,
    isContactOpen,
    setIsContactOpen,
    isTechOpen,
    setIsTechOpen,
  } = useGlobalContext()

  return (
    <nav>
      <ul>
        <li id="about">
          <button
            onClick={() => {
              setIsAboutOpen(true)
            }}
            disabled={isTechOpen || isAboutOpen || isContactOpen}
          >
            about
          </button>
        </li>
        <li id="contact">
          {" "}
          <button
            onClick={() => {
              setIsContactOpen(true)
            }}
            disabled={isTechOpen || isContactOpen || isAboutOpen}
          >
            contact
          </button>
        </li>
        <li id="contact">
          {" "}
          <button
            onClick={() => {
              setIsTechOpen(true)
            }}
            disabled={isTechOpen || isAboutOpen || isContactOpen}
          >
            technology
          </button>
        </li>

        <button
          className="nepn"
          onClick={() => {
            setIsAboutOpen(false)
            setIsContactOpen(false)
            setIsTechOpen(false)
          }}
          disabled={isTechOpen || isAboutOpen || isContactOpen}
        >
          <Link to="/music">music</Link>
        </button>
      </ul>
    </nav>
  )
}
