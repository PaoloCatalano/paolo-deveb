import React from "react"
import Name from "../components/Name"
import { GoMarkGithub } from "react-icons/go"
import { MdDoNotDisturbOff } from "react-icons/md"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProjectTemplate({
  photos,
  title,
  desc,
  git,
  id,
  tech,
  url,
  maxProjects,
}) {
  // const image = getImage(photos[maxProjects ? 3 : id - 1].childrenImageSharp[0])
  const image = getImage(photos[0].childrenImageSharp[0])
  return (
    <>
      <div className={`card card-${maxProjects ? 4 : id}`}>
        <div className="hero-card">
          <div className="card-pic-frame">
            <div className="card-name">
              <Name text={title} />
            </div>
            <GatsbyImage image={image} alt={title} className="card-pic" />
          </div>
          {git ? (
            <a href={git} target="_blank" rel="noopener noreferrer">
              <div>repo</div>
              <GoMarkGithub />
            </a>
          ) : (
            <a href="/" style={{ pointerEvents: "none" }}>
              <div>repo</div>
              <MdDoNotDisturbOff />
            </a>
          )}
        </div>
        <div>
          <p className="card-title">{title}</p>
          <div className="inset-line"></div>
        </div>
        <div>
          <span className="card-label">description_ </span>
          <div className="card-desc">{desc}</div>
        </div>
        <div style={{ margin: "1rem 0 2rem" }}>
          <span className="card-label">technologies_ </span>
          <div className="card-tech">
            {tech.map((item, index) => (
              <span className="neon" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="inset-line"></div>
        <div className="card-link">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Go to website
          </a>
        </div>
      </div>
    </>
  )
}
