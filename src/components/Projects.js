import React from "react"
import projects from "../constant/projects"
export default function Links() {
  return (
    <ul className="links">
      {projects.map((link, index) => {
        const { url } = link
        return <li key={index}>{url}</li>
      })}
    </ul>
  )
}
