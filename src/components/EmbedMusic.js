import React from "react"
import Video from "../components/Video"

export default function EmbedMusic() {
  return (
    <article className="connecting appear">
      <section className="projects" style={{ width: "100%" }}>
        {/* bandcamp 3rem */}

        <div style={{ marginBottom: "3rem" }} id="Ambient">
          <button>Ambient</button>
          <h2>Dupont East</h2>
          <iframe
            title="Dupont East"
            src="https://bandcamp.com/EmbeddedPlayer/album=158895256/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1420239935/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/360-passion">
              360 Passion by Page14
            </a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }} id="Drum&Bass">
          <button>Drum and Bass</button>
          <h2>Papankatin</h2>
          <iframe
            title="Papankatin"
            src="https://bandcamp.com/EmbeddedPlayer/album=4149887240/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1097689805/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/from-0-to-09">
              from 0 to 0.9 by Page14
            </a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }} id="Experimental">
          <button>Experimental</button>
          <h2>Trill Duo 40</h2>
          <iframe
            title="Trill Duo 40"
            src="https://bandcamp.com/EmbeddedPlayer/album=2702587563/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1796657973/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/strhucthurambient">
              strhucthurAmbient by Page14
            </a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }} id="Progressive">
          <button>Progressive</button>
          <h2>Dive into 61</h2>
          <iframe
            title="Dive into 61"
            src="https://bandcamp.com/EmbeddedPlayer/album=1960529552/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1696746228/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/2019">2019 by Page14</a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <button>Metal</button>
          <h2>Fornix</h2>
          <iframe
            title="Fornix"
            src="https://bandcamp.com/EmbeddedPlayer/album=3103077603/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1158588459/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/fornix">
              Fornix by Page14
            </a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <button>Rock</button>
          <h2>Take another breath (w/ Eros Fichera)</h2>
          <iframe
            title="Take another breath"
            src="https://bandcamp.com/EmbeddedPlayer/album=3414414810/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=654451160/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/take-another-breath">
              Take another breath by Page14 and Eros Fichera
            </a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <button>Video Game</button>
          <h2>Laboratory</h2>
          <iframe
            title="Laboratory"
            src="https://bandcamp.com/EmbeddedPlayer/album=1694782990/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=1297855804/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/fake">Fake by Page14</a>
          </iframe>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <button>Dark Jazz</button>
          <h2>Jazzevil</h2>
          <iframe
            title="Jazzevil"
            src="https://bandcamp.com/EmbeddedPlayer/album=2789249781/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/track=88179089/transparent=true/"
            seamless
          >
            <a href="https://page14.bandcamp.com/album/music-generator-2">
              Music Generator 2 by Page14
            </a>
          </iframe>
        </div>
        {/* soundcloud 5rem */}
        <div style={{ marginBottom: "5rem" }}>
          <button>Industrial - Noise</button>
          <h2>Schande Über Dich</h2>
          <iframe
            title="Schande Über Dich"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813394978&color=%23181c17&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <button>Electro</button>
          <h2>Fruscio</h2>
          <iframe
            title="Fruscio"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/811953262&color=%23181c17&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <button>Hard Core</button>
          <h2>Infant</h2>
          <iframe
            title="Infant"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813389542&color=%23181c17&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>

        {/* youtube 5rem */}
        <div style={{ marginBottom: "5rem" }}>
          <button>Psychedelic</button>
          <h2>Vicine</h2>
          <Video />
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <button>Drumversions</button>
          <h2>Predators Theme Drummix</h2>
          <Video
            src="https://www.youtube.com/embed/NZGsNWgzAQg"
            title="Predators Theme Drummix"
          />
        </div>

        <div style={{ marginBottom: "5rem" }}>
          <button>Covers and Remixes</button>
          <h2>Alien 3 Metal Cover</h2>
          <Video
            title="Alien 3 Metal Cover"
            src="https://www.youtube.com/embed/T7AUhUAeZko"
          />
        </div>
      </section>
    </article>
  )
}
