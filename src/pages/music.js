import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Name from "../components/Name"

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
      <main className="container" style={{ textAlign: "center" }}>
        <Name text="Music Projects>" />
      </main>
    </>
  )
}
