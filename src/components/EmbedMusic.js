import React from "react"
import Bandcamp from "./Bandcamp"
import Soundcloud from "./Soundcloud"
import Youtube from "./Youtube"

export default function EmbedMusic() {
  return (
    <article className="connecting">
      <section className="projects" style={{ width: "100%" }}>
        <Bandcamp />
        <Soundcloud />
        <Youtube />
      </section>
    </article>
  )
}
