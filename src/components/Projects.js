import React from "react"
import projects from "../constant/projects"
import ProjectTemplate from "../components/ProjectTemplate"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects() {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    {
      allFile(sort: { fields: relativePath }) {
        nodes {
          childrenImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
    }
  `)

  const pics = nodes.filter(pic => pic.relativePath.includes("pic"))

  return (
    <>
      <ul className="links card-container">
        {projects.map(props => {
          const { id } = props
          return (
            <li key={id}>
              <div className="slogan file">File 00{id}</div>
              <ProjectTemplate photos={pics} {...props} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
