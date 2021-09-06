import React from "react"

export default function Soundcloud() {
  return (
    <div style={{ marginBottom: "5rem" }} className="arrow tech-list">
      <button>
        <a
          href="https://soundcloud.com/tt-fourteen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soundcloud
        </a>
      </button>
      {soundcloudList
        .sort((a, b) => a.order - b.order)
        .map(({ genre, title, src }) => (
          <div key={src} style={{ marginBottom: "4rem" }}>
            <header>{genre}</header>
            <h2>{title}</h2>
            <iframe
              title={title}
              src={src}
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
            ></iframe>
          </div>
        ))}
    </div>
  )
}

const soundcloudList = [
  {
    order: 1,
    genre: "Industrial - Noise",
    title: "Schande Über Dich",
    src:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813394978&color=%23181c17&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  {
    order: 2,
    genre: "Electro",
    title: "Fruscio",
    src:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/811953262&color=%23181c17&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  {
    order: 3,
    genre: "Hardcore",
    title: "Infant",
    src:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813389542&color=%23181c17&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
]
