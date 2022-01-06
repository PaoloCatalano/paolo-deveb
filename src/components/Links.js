import React from "react"
import links from "../constant/links"
export default function Links({ children }) {
  return (
    <ul className="links">
      {children}
      {links.map(link => {
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
