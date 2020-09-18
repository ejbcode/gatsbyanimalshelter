import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 500px;
`
const TextArea = styled.div`
  color: #fff;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  width: 60%;

  /* background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.9),
    rgba(34, 49, 63, 0.75)
  ); */
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.5rem;
    color: royalblue;
    span {
      font-size: 4rem;

      color: rebeccapurple;
    }
    @media (min-width: 768px) {
      font-size: 4;
      span {
        font-size: 5.5rem;
      }
    }
  }

  p {
    font-size: 2rem;
    color: royalblue;
  }
`

const ImageHero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  console.log(data.file.childImageSharp.fluid)

  return (
    <ImageBackground
      tag="section"
      fluid={data.file.childImageSharp.fluid}
      fadeIn="soft"
    >
      <TextArea>
        <h1>
          <span> Adopt,</span> <br />
          Don’t Shop <br />
        </h1>
        <p> Helping our animal friends one paw at a time.</p>
      </TextArea>
    </ImageBackground>
  )
}

export default ImageHero
