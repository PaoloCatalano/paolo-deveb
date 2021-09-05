import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Name from "../components/Name"
import EmbedMusic from "../components/EmbedMusic"
import Footer from "../components/Footer"
// import genres from "../constant/genres"
export default function Music() {
  // const handleClick = e => {
  //   e.preventDefault()
  //   const target = e.target.getAttribute("attr")
  //   console.log(target)
  //   const location = document.querySelector(target).offsetTop
  //   window.scrollTo({
  //     left: 0,
  //     top: location,
  //   })
  // }
  return (
    <div style={{ overflowX: "clip" }}>
      <Seo title="Music" description="Music content" />
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
        </ul>
        {/* <ul>
          {genres.map(({ genre }, index) => (
            <li key={index} attr={genre} onClick={handleClick}>
              <button attr={genre}>{genre}</button>
            </li>
          ))}
        </ul> */}
      </nav>
      <main className="container" style={{ height: "100vh" }}>
        <Name text="Music Projects>" />
        <EmbedMusic />
        <Footer />
      </main>
    </div>
  )
}
