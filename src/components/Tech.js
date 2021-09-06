import React from "react"
import Name from "../components/Name"
import Footer from "../components/Footer"

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
        <span className="pink">&#123;</span>
      </p>
      <section className="arrow tech-list">
        <header>frameworks and libraries</header>
        <ul>
          <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>{" "}
            innovative JS library for building user interfaces
          </li>
          <li>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby.js
            </a>{" "}
            blazing fast frontend framework
          </li>
          <li>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            hybrid static and server rendering framework
          </li>
          <li>
            <a
              href="https://mdxjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDX
            </a>{" "}
            powerful markdown combined with jsx syntax
          </li>
        </ul>
        <header>server-side and database</header>
        <ul>
          <li>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>{" "}
            polular open source server environment
          </li>
          <li>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Express.js
            </a>{" "}
            unopinionated web framework for Node.js
          </li>
          <li>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB
            </a>{" "}
            modern and famous web app database
          </li>
        </ul>
        <header>Headless content management system</header>
        <ul>
          <li>
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contentful
            </a>{" "}
            API-first platform for any digital channel
          </li>
          <li>
            <a
              href="https://strapi.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strapi
            </a>{" "}
            easy and fast APIs manager
          </li>
          <li>
            <a
              href="https://airtable.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airtable
            </a>{" "}
            intuitive and spreadsheet-like platform
          </li>
        </ul>
        <header>features and integrations</header>
        <ul>
          <li>
            <a
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopify
            </a>{" "}
            trustful online shop software
          </li>
          <li>
            <a
              href="https://formspree.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree
            </a>{" "}
            automatic and easy email storage
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Web_analytics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Analytics
            </a>
            integration with the most famous services, such as{" "}
            <span className="blue">&#91;</span> Google Analytics, Google Tag
            Manager, Facebook Pixel <span className="blue">&#93;</span>
          </li>
        </ul>
      </section>
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
