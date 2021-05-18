import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

export default function Music() {
  return (
    <>
      <Seo title="Music" description="Music content" />

      <main className="container">
        My music
        <button>
          <Link to="/">Home</Link>
        </button>
      </main>
    </>
  )
}
