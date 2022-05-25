import React from "react"
import Seo from "../components/Seo"
import Name from "../components/Name"
import AllProjects from "../components/AllProjects"
import Footer from "../components/Footer"
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
    <>
      <Seo
        title="All Projects"
        description="All the experiments, apps and websites"
      />
      <nav>
        <ul className="links">
          <button style={{ margin: "0 1rem 0.5rem 1rem" }}>
            <AniLink to="/" swipe direction="left" top="exit" entryOffset={80}>
              home
            </AniLink>
          </button>
        </ul>
      </nav>
      <main className="container">
        <section className="projects">
          <Name text="all_projects" />
          {isTitleComplete ? (
            <article className="hero">
              <AllProjects />
            </article>
          ) : (
            <article style={{ height: "150vh" }}></article>
          )}
          <Footer />
        </section>
      </main>
    </>
  )
}
