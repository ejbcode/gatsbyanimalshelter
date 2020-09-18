import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HomeContent = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const info = data.allDatoCmsPage.nodes[0]
  return (
    <>
      <h2>{info.title}</h2>
      <div>
        <p>{info.content}</p>
        <img src={info.image.fluid.src} alt={info.title} />
      </div>
    </>
  )
}

export default HomeContent
