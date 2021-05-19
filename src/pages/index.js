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
    x: "3%",
    y: "10%",
  }

  const contactProps = {
    closeFunction: () => {
      setIsContactOpen(false)
    },
    title: "Contact Me",
    x: "6%",
    y: "15%",
  }

  const techProps = {
    closeFunction: () => {
      setIsTechOpen(false)
    },
    title: "Technologies",
    x: "9%",
    y: "20%",
  }

  return (
    <Layout>
      <main className="container">
        <Name />
        <article className="connecting appear">
          <section className="projects">
            <h2>My projects:</h2>
            <Projects />
          </section>
          <div>
            <h2>You can find me on:</h2>
            <Links />
          </div>
        </article>
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
