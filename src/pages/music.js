import React from "react"
import Seo from "../components/Seo"
import Name from "../components/Name"
import EmbedMusic from "../components/EmbedMusic"
import Footer from "../components/Footer"
import Links from "../components/Links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <button style={{ margin: "0 1rem 0.5rem 1rem" }}>
            <AniLink to="/" swipe direction="right" top="exit" entryOffset={80}>
              home
            </AniLink>
          </button>
        </Links>
      </nav>
      <main className="container" style={{ height: "100vh", width: "90vw" }}>
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
