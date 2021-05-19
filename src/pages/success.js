import React from "react"
import Name from "../components/Name"
import Seo from "../components/Seo"
import { Link } from "gatsby"
import gif from "../images/paolo_deveb.gif"

const SuccessPage = () => {
  const desc = "Thank you"

  return (
    <>
      <Seo title="Success Page" description="Success page of deveb" />
      <main className="success">
        <div className="center" style={{ fontSize: "5vw" }}>
          Your message has been exported!
        </div>
        <Name text={desc} />

        <Link to="/" className="flick-neon">
          Home
        </Link>

        <img
          src={gif}
          alt="paolo catalano deveb web development"
          height="50%"
        />
      </main>
    </>
  )
}

export default SuccessPage
