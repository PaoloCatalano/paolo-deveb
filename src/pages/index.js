import React, { useRef } from "react"
import Layout from "../components/Layout"
import ModalBox from "../components/ModalBox"
import Name from "../components/Name"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import Tech from "../components/Tech"
import { useGlobalContext } from "../context/context"
import Footer from "../components/Footer"
import { GoMarkGithub } from "react-icons/go"
import useOnClickOutside from "../utils/useOnClickOutside"

export default function Home() {
  const {
    isAboutOpen,
    setIsAboutOpen,
    isContactOpen,
    setIsContactOpen,
    isTechOpen,
    setIsTechOpen,
  } = useGlobalContext()

  const refAbout = useRef()
  const refContact = useRef()
  const refTech = useRef()
  useOnClickOutside(refAbout, () => setIsAboutOpen(false))
  useOnClickOutside(refContact, () => setIsContactOpen(false))
  useOnClickOutside(refTech, () => setIsTechOpen(false))

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
      }, 900)
    }
    timer()
    return clearTimeout(timer)
  }, [isTitleComplete])

  return (
    <Layout>
      <main className="container">
        <Name />

        {isTitleComplete ? (
          <>
            <article className="hero">
              <div className="slogan">
                Front-end and Back-end creator for your{" "}
                <span className="neon">web sites.</span>
              </div>
              <section className="projects">
                <h2>See my main projects:</h2>
                <Projects />
              </section>
              <div style={{ marginTop: "5rem" }}>
                <h2>You can find me on:</h2>
                <ul className="links">
                  <li>
                    <span>
                      <GoMarkGithub />
                    </span>{" "}
                    <a
                      href="https://github.com/PaoloCatalano"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <div className="small-screen">
              <Footer />
            </div>
          </>
        ) : (
          <article style={{ height: "200vh" }}></article>
        )}
      </main>
      <div className="wide-screen">
        <Footer />
      </div>
      {isAboutOpen && (
        <ModalBox {...aboutProps}>
          <div ref={refAbout}>
            <About />
          </div>
        </ModalBox>
      )}
      {isContactOpen && (
        <ModalBox {...contactProps}>
          <div ref={refContact}>
            <Contact />
          </div>
        </ModalBox>
      )}
      {isTechOpen && (
        <ModalBox {...techProps}>
          <div ref={refTech}>
            <Tech />
          </div>
        </ModalBox>
      )}
    </Layout>
  )
}
