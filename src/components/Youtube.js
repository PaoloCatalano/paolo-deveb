import React from "react"
import Video from "../components/Video"

export default function Soundcloud() {
  return (
    <div style={{ marginBottom: "3rem" }} className="arrow tech-list">
      <button>
        <a
          href="https://www.youtube.com/user/page14x4frames/playlists"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </button>
      {soundcloudList
        .sort((a, b) => a.order - b.order)
        .map(({ genre, title, src }) => (
          <div key={src} style={{ marginBottom: "4rem" }}>
            <header>{genre}</header>
            <h2>{title}</h2>
            <Video title={title} src={src} />
          </div>
        ))}
    </div>
  )
}

const soundcloudList = [
  {
    order: 1,
    genre: "Psychedelic",
    title: "Vicine",
    src: "https://www.youtube.com/embed/FmYRa66PyTo",
  },
  {
    order: 2,
    genre: "Drumversions",
    title: "Predators Theme Drummix",
    src: "https://www.youtube.com/embed/NZGsNWgzAQg",
  },
  {
    order: 3,
    genre: "Covers and Remixes",
    title: "Alien 3 Metal Cover",
    src: "https://www.youtube.com/embed/T7AUhUAeZko",
  },
]
