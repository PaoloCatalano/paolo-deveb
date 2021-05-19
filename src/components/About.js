import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"
import photo from "../images/8-bit-head.png"

export default function About() {
  return (
    <div className="content">
      <Name text="about_me>" />

      <p>
        Hello, my name is Paolo, I am a freelance web developer, web designer,
        UI/UX, music compose and digital content.
      </p>

      <p>
        My <span style={{ color: "var(--const)" }}>const</span>ant passion in IT
        and <span style={{ color: "var(--new)" }}>new</span>{" "}
        <span style={{ color: "var(--date)" }}>Technologies</span>
        <span style={{ color: "var(--giallo)" }}>()</span> give me the
        possibility to turn my hobby into my work.
      </p>
      <div className="loading">
        <img src={photo} alt="profile head" />
      </div>
      <Footer />
    </div>
  )
}
// await	break	case	catch	class
// const	continue	debugger	default	delete
// do	else	enum	export	extends
// false	finally	for	function	if
// implements	import	in	instanceof	interface
// let	new	null	package	private
// protected	public	return	super	switch
// static	this	throw	try	true
// typeof	var	void	while	with
// yield
