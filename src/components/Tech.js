import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"
import TechTemplate from "./TechTemplate"

export default function Tech() {
  return (
    <div className="content">
      <Name text="technologies>" />
      <p>
        The <span className="blue">typeof</span> programming languages that I
        use include JavaScript, HTML5, CSS3 and Java.
      </p>
      <p>
        In order to build your next-generation static or dynamic web site,
        e-commerce, landing page, drive storage, blog or mobile application, I
        implement the following technologies:{" "}
      </p>
      <p style={{ marginTop: "-1em" }} className="pink">
        &#123;
      </p>
      <TechTemplate />
      <p>
        <span className="pink">&#125;</span>
      </p>
      <p>
        <span className="red">return</span>{" "}
        <span className="yellow">technologies</span>
        <span className="pink">()</span>;
      </p>
      <Footer />
    </div>
  )
}

// await async	break	case	catch	class
// continue		default	delete
// 	else	enum	extends
// false	finally	for	function	if
// implements	import	instanceof
// let	null
// 		switch
// 	this	throw	try	true
// 	var	while
//
