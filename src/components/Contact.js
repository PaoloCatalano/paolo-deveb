import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className="content">
      <Name path="contact_me>" />
      <p>Thank you for visiting my web page!</p>
      <p>Feel free to contact me at the following email:</p>
      <a className="neon" href="mailto:paolo12587@gmail.com">
        paolo12587@gmail.com
      </a>
      <p>Or write me a message by simply filling up the form below:</p>
      <form action="">
        <input type="text" name="" id="" placeholder="name" />
        <input type="email" name="" id="" placeholder="e-mail" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="message..."
        ></textarea>
        <input type="submit" value="submit" />
      </form>
      <Footer />
    </div>
  )
}
