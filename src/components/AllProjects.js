import React from "react"
import projects from "../constant/projects"
import ProjectTemplate from "../components/ProjectTemplate"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects({ maxProjects }) {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    {
      allFile(sort: { fields: relativePath }) {
        nodes {
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
          relativePath
        }
      }
    }
  `)

  const pics = title => nodes.filter(pic => pic.relativePath.includes(title))

  return (
    <>
      <ul className="links card-container">
        {projects.reverse().map(props => {
          const { id, title } = props
          return (
            <li key={id}>
              <div className="slogan file">File 0{id}</div>
              <ProjectTemplate
                maxProjects
                photos={
                  pics(title).length !== 0 ? pics(title) : pics("pic-4.png")
                }
                {...props}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
