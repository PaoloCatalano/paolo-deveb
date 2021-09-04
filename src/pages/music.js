import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Name from "../components/Name"
import EmbedMusic from "../components/EmbedMusic"

export default function Music() {
  return (
    <>
      <Seo title="Music" description="Music content" />
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
        </ul>
      </nav>
      <main className="container">
        <Name text="Music Projects>" />
        <EmbedMusic />
      </main>
    </>
  )
}
