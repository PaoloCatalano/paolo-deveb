import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"
import Form from "../components/Form"

export default function Contact() {
  return (
    <div className="content">
      <Name text="contact_me>" />
      <p>
        Thank you <span className="pink">for</span> visiting my web page!
      </p>
      <p>Feel free to contact me at the following email:</p>
      <a className="neon" href="mailto:paolo12587@gmail.com">
        paolo12587@gmail.com
      </a>
      <p>
        Or <span className="blue">let</span>'s stay in touch by simply filling
        up the form below:
      </p>
      <Form />
      <Footer />
    </div>
  )
}
