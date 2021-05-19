import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className="content">
      <Name text="contact_me>" />
      <p>Thank you for visiting my web page!</p>
      <p>Feel free to contact me at the following email:</p>
      <a className="neon" href="mailto:paolo12587@gmail.com">
        paolo12587@gmail.com
      </a>
      <p>Or write me a message by simply filling up the form below:</p>
      <form name="contact" netlify action="/success">
        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="e-mail" required />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="message..."
          required
        ></textarea>
        <input type="submit" value="submit" />
      </form>
      <Footer />
    </div>
  )
}
