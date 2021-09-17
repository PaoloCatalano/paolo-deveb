import React from "react"
import Layout from "../components/Layout"
import ModalBox from "../components/ModalBox"
import Name from "../components/Name"
import Projects from "../components/Projects"
import Links from "../components/Links"
import About from "../components/About"
import Contact from "../components/Contact"
import Tech from "../components/Tech"
import { useGlobalContext } from "../context/context"
import Footer from "../components/Footer"

export default function Home() {
  const {
    isAboutOpen,
    setIsAboutOpen,
    isContactOpen,
    setIsContactOpen,
    isTechOpen,
    setIsTechOpen,
  } = useGlobalContext()

  const aboutProps = {
    closeFunction: () => {
      setIsAboutOpen(false)
    },
    title: "About Me",
  }

  const contactProps = {
    closeFunction: () => {
      setIsContactOpen(false)
    },
    title: "Contact Me",
  }

  const techProps = {
    closeFunction: () => {
      setIsTechOpen(false)
    },
    title: "Technologies",
  }

  const [isTitleComplete, setIsTitleComplete] = React.useState(false)

  React.useEffect(() => {
    function timer() {
      setTimeout(() => {
        setIsTitleComplete(true)
      }, 1700)
    }
    timer()
    return clearTimeout(timer)
  }, [isTitleComplete])

  return (
    <Layout>
      <main className="container">
        <Name />
        {isTitleComplete ? (
          <article className="connecting">
            <section className="projects">
              <h2>My projects:</h2>
              <Projects />
            </section>
            <div>
              <h2>You can find me on:</h2>
              <Links />
            </div>
          </article>
        ) : (
          <article></article>
        )}
        <div className="small-screen">
          <Footer />
        </div>
      </main>
      <div className="wide-screen">
        <Footer />
      </div>
      {isAboutOpen && (
        <ModalBox {...aboutProps}>
          <About />
        </ModalBox>
      )}
      {isContactOpen && (
        <ModalBox {...contactProps}>
          <Contact />
        </ModalBox>
      )}
      {isTechOpen && (
        <ModalBox {...techProps}>
          <Tech />
        </ModalBox>
      )}
    </Layout>
  )
}
