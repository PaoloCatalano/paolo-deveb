import React from "react"

export default function Bandcamp() {
  return (
    <div style={{ marginBottom: "5rem" }} className="arrow tech-list">
      <button>
        <a
          href="https://page14.bandcamp.com/album/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bandcamp
        </a>
      </button>
      {bandcampList
        .sort((a, b) => a.order - b.order)
        .map(({ genre, title, src, albumSrc, albumTitle }) => (
          <div key={title} style={{ marginBottom: "3rem" }}>
            <header>{genre}</header>
            <h2>{title}</h2>
            <iframe title={title} src={src} seamless>
              <a href={albumSrc}>{albumTitle}</a>
            </iframe>
          </div>
        ))}
    </div>
  )
}

const bandcampList = [
  {
    order: 1,
    genre: "Ambient",
    title: "Dupont East",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=158895256/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1420239935/transparent=true/",
    albumTitle: "360 Passion by Page14",
  },
  {
    order: 2,
    genre: "Drum and Bass",
    title: "Papankatin",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=4149887240/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1097689805/transparent=true/",

    albumSrc: "https://page14.bandcamp.com/album/from-0-to-09",
    albumTitle: "from 0 to 0.9 by Page14",
  },
  {
    order: 3,
    genre: "Experimental",
    title: "Trill Duo 40",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=2702587563/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1796657973/transparent=true/",
    albumSrc: "https://page14.bandcamp.com/album/strhucthurambient",
    albumTitle: "strhucthurAmbient by Page14",
  },
  {
    order: 4,
    genre: "Progressive",
    title: "Dive into 61",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=1960529552/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1696746228/transparent=true/",
    albumSrc: "https://page14.bandcamp.com/album/strhucthurambient",
    albumTitle: "2019 by Page14",
  },
  {
    order: 5,
    genre: "Metal",
    title: "Fornix",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=3103077603/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1158588459/transparent=true/",
    albumSrc: "https://page14.bandcamp.com/album/fornix",
    albumTitle: "Fornix by Page14",
  },
  {
    order: 6,
    genre: "Rock",
    title: "Take another breath",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=3414414810/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=654451160/transparent=true/",
    albumSrc: "https://page14.bandcamp.com/album/take-another-breath",
    albumTitle: "Take another breath by Page14 and Eros Fichera",
  },
  {
    order: 7,
    genre: "Video Game",
    title: "Laboratory",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=1694782990/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1297855804/transparent=true/",
    albumSrc: "https://page14.bandcamp.com/album/fake",
    albumTitle: "Fake by Page14",
  },
  {
    order: 8,
    genre: "Dark Jazz",
    title: "Jazzevil",
    src:
      "https://bandcamp.com/EmbeddedPlayer/album=2789249781/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=88179089/transparent=true/",
    albumSrc: "https://page14.bandcamp.com/album/music-generator-2",
    albumTitle: "Music Generator 2 by Page14",
  },
]
