import React from "react"
import Name from "../components/Name"

import { useForm, ValidationError } from "@formspree/react"

export default function Form() {
  const [state, handleSubmit] = useForm("xnqlplrk")
  const [name, setName] = React.useState("")

  if (state.succeeded) {
    return (
      <>
        <div className="center" style={{ textAlign: "center" }}>
          Your message has been exported!
        </div>
        <Name text={`://Thank you/${name}`} />
      </>
    )
  }
  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      style={{
        background: "var(--background-dark)",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <ValidationError prefix="Namw" field="name" errors={state.errors} />
      <input
        type="email"
        name="email"
        placeholder="e-mail"
        id="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        cols="30"
        rows="5"
        placeholder="message..."
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button
          className="btn-submit"
          type="submit"
          disabled={state.submitting}
        >
          SEND
        </button>
      </div>
    </form>
  )
}
