import React from "react"

const techs = [
  {
    category: "frameworks and libraries",
    data: [
      {
        title: "React.js",
        url: "https://reactjs.org/",
        desc: <span> innovative JS library for building user interfaces</span>,
      },
      {
        title: "Gatsby.js",
        url: "https://www.gatsbyjs.com/",
        desc: <span> blazing fast frontend framework</span>,
      },
      {
        title: "Next.js",
        url: "https://nextjs.org/",
        desc: <span> hybrid static and server rendering framework</span>,
      },
      {
        title: "MDX",
        url: "https://mdxjs.com/",
        desc: <span> powerful markdown combined with jsx syntax</span>,
      },
    ],
  },
  {
    category: "server-side and database",
    data: [
      {
        title: "Node.js",
        url: "https://nodejs.org/",
        desc: <span> polular open source server environment</span>,
      },
      {
        title: "Express.js",
        url: "https://expressjs.com/",
        desc: <span> unopinionated web framework for Node.js</span>,
      },
      {
        title: "MongoDB",
        url: "https://www.mongodb.com/",
        desc: <span> modern and famous web app using NoSQL database</span>,
      },
      {
        title: "Firebase",
        url: "https://firebase.google.com/",
        desc: <span> back-end by Google for fast app development</span>,
      },
    ],
  },
  {
    category: "headless content management system",
    data: [
      {
        title: "Contentful",
        url: "https://www.contentful.com/",
        desc: <span> API-first platform for any digital channel</span>,
      },
      {
        title: "Strapi",
        url: "https://strapi.io/",
        desc: <span> easy and fast APIs manager</span>,
      },
      {
        title: "Airtable",
        url: "https://airtable.com/",
        desc: <span> intuitive and spreadsheet-like platform</span>,
      },
      {
        title: "Shopify",
        url: "https://www.shopify.com/",
        desc: <span> trustful e-commerce platform for online stores</span>,
      },
    ],
  },

  {
    category: "authentication",
    data: [
      {
        title: "Auth0",
        url: "https://auth0.com",
        desc: <span> adaptable authentication and authorization platform</span>,
      },
      {
        title: "Netlify Identity",
        url: "https://docs.netlify.com/visitor-access/identity/",
        desc: <span> full suite of authentication functionality</span>,
      },
      {
        title: "JSON Web Tokens",
        url: "https://jwt.io/",
        desc: (
          <span>
            {" "}
            open method for representing claims securely between two parties.
          </span>
        ),
      },
    ],
  },
  {
    category: "hosting services",
    data: [
      {
        title: "Netlify",
        url: "https://www.netlify.com/",
        desc: <span> intuitive Git-based platform t0 build and deploy</span>,
      },
      {
        title: "Vercel",
        url: "https://vercel.com/",
        desc: (
          <span> perfect hosting platform for Next.js projects and more</span>
        ),
      },
      {
        title: "Heroku",
        url: "https://www.heroku.com/",
        desc: (
          <span>
            {" "}
            cloud platform as a service supporting several programming languages
          </span>
        ),
      },
    ],
  },
  {
    category: "features and integrations",
    data: [
      {
        title: "Formspree",
        url: "https://formspree.io/",
        desc: <span> automatic and intuitive emails storage</span>,
      },
      {
        title: "Buttondown",
        url: "https://buttondown.email/",
        desc: <span> easy tool for producing newsletters</span>,
      },
      {
        title: "Analytics",
        url: "https://en.wikipedia.org/wiki/Web_analytics",
        desc: (
          <span>
            {" "}
            integration with the most famous services, such as ={" "}
            <span className="blue">&#91;</span> Google Analytics, Google Tag
            Manager, Facebook Pixel <span className="blue">&#93;</span>
          </span>
        ),
      },
    ],
  },
]

export default techs
