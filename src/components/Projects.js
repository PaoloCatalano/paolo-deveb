import React from "react"
import mainProjects from "../constant/mainProjects"
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
            gatsbyImageData(placeholder: BLURRED)
          }
          relativePath
        }
      }
    }
  `)

  // const pics = nodes.filter(pic => pic.relativePath.includes("pic")).slice(0, 3)
  const pics = title => nodes.filter(pic => pic.relativePath.includes(title))

  return (
    <>
      <ul className="links card-container">
        {mainProjects.map(props => {
          const { id, title } = props
          return (
            <li key={id}>
              <div className="slogan file">File 00{id}</div>
              <ProjectTemplate photos={pics(title)} {...props} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
