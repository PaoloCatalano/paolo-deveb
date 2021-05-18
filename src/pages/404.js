import React from "react"
import Name from "../components/Name"
import Seo from "../components/Seo"
import { Link } from "gatsby"
import gif from "../images/paolo_deveb.gif"
export default function ErrorPage() {
  const desc = "This page has been formatted"

  return (
    <>
      <Seo title="404 | Error Page" description={desc} image={gif} />
      <main className="error">
        <div className="center cursor">404 ERROR</div>
        <Name text={desc} />
        <button>
          <Link to="/">Home</Link>
        </button>
        <img
          src={gif}
          alt="paolo catalano deveb web development"
          height="50%"
        />
      </main>
    </>
  )
}
