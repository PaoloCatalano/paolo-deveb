import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Name from "../components/Name"

export default function Music() {
  return (
    <>
      <Seo title="Music" description="Music content" />

      <main className="container">
        <Name text="Work in progress. . . >" />
        <button>
          <Link to="/">Home</Link>
        </button>
      </main>
    </>
  )
}
