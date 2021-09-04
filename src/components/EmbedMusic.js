import React from "react"

export default function EmbedMusic() {
  return (
    <article className="connecting appear">
      <section className="projects" style={{ width: "100%" }}>
        <div>
          <h2>Inspector</h2>
          <iframe
            title="Fornix"
            style={{ border: 0, width: "100%", height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3103077603/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/track=3905345296/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/fornix">
              Fornix by Page14
            </a>
          </iframe>
        </div>

        <div>
          <h2>Earth's End</h2>
          <iframe
            title="Fornix"
            style={{ border: 0, width: "100%", height: 120 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3103077603/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/artwork=small/track=2198876956/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/fornix">
              Fornix by Page14
            </a>
          </iframe>
        </div>
      </section>
    </article>
  )
}
