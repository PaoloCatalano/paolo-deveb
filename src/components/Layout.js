import React from "react"
import Navbar from "./Navbar"
import Seo from "./Seo"

export default function Layout({
  children,
  title,
  description,
  image,
  article,
}) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        article={article}
      />
      <Navbar />
      {children}
    </>
  )
}
