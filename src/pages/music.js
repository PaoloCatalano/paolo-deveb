import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Name from "../components/Name"
import EmbedMusic from "../components/EmbedMusic"
import Footer from "../components/Footer"

export default function Music() {
  const [isTitleComplete, setIsTitleComplete] = React.useState(false)

  React.useEffect(() => {
    function timer() {
      setTimeout(() => {
        setIsTitleComplete(true)
      }, 1000)
    }
    timer()
    return clearTimeout(timer)
  }, [isTitleComplete])

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
      </nav>
      <main className="container" style={{ height: "100vh" }}>
        <Name text="music_projects>" />
        {isTitleComplete ? (
          <EmbedMusic />
        ) : (
          <article style={{ height: "150vh" }}></article>
        )}
        <Footer />
      </main>
    </div>
  )
}
