import React from "react"
import techs from "../constant/tech"

export default function TechTemplate() {
  return (
    <section className="arrow tech-list">
      {techs.map(({ category, data }) => (
        <div key={category}>
          <header>{category}</header>
          <ul>
            {data.map(({ title, url, desc }, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
