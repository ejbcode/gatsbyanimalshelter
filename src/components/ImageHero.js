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
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.9),
    rgba(34, 49, 63, 0.75)
  ); */

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 4rem;
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
          Because <br />
          everybody <br />
          deserves
          <br /> a Home
        </h1>
        <p> Adopt, Don’t Shop</p>
      </TextArea>
    </ImageBackground>
  )
}

export default ImageHero
