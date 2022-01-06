import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Name from "../components/Name"
import EmbedMusic from "../components/EmbedMusic"
import Footer from "../components/Footer"
import Links from "../components/Links"

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
        <Links>
          <button>
            <Link to="/">Home</Link>
          </button>
        </Links>
      </nav>
      <main className="container" style={{ height: "100vh" }}>
        <Name text="music_projects" />
        {isTitleComplete ? (
          <>
            <div className="slogan">music composer for any genre you like.</div>
            <h2 className="projects">Listen of free tracks:</h2>
            <EmbedMusic />
          </>
        ) : (
          <article style={{ height: "150vh" }}></article>
        )}
        <Footer />
      </main>
    </div>
  )
}
