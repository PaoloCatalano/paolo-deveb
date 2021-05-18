import React from "react"
import link from "../constant/links"
export default function Links() {
  return (
    <ul className="links">
      {link.map(link => {
        const { id, icon, url } = link
        return (
          <li key={id}>
            <span>{icon}</span> {url}
          </li>
        )
      })}
    </ul>
  )
}
