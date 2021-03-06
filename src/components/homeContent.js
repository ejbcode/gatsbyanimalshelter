import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

const TextBox = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    p {
      line-height: 2;
      padding-top: 1rem;
    }
  }
`

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
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {info.title}
      </h2>
      <TextBox>
        <p>{info.content}</p>
        <Image fluid={info.image.fluid} alt={info.title} />
      </TextBox>
    </>
  )
}

export default HomeContent
