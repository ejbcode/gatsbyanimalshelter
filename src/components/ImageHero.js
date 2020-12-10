import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = styled.div`
  background: var(--primary);
  background-image: url("http://demo.highhay.com/landeux/img/bg-layer.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;

  .container {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex: wrap;
    align-items: center;
    flex-direction: column;
  }
  .wave {
    bottom: -2px;
    position: absolute;
    width: 100%;
    height: 30%;
    z-index: 5;
    background-image: url(${props => props.bg3});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 50%;
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }
  }
`

const TextArea = styled.div`
  padding: 3rem 1rem;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: whitesmoke;
    span {
      color: palevioletred;
    }
  }
  p {
    font-size: 2rem;
    color: #333;
  }
  a {
    margin-bottom: 1rem;
    display: inline-block;
    border: 1px solid whitesmoke;
    margin-top: 1rem;
    padding: 0.5rem;

    transition: 0.3s;
  }
  a:hover {
    background-color: palevioletred;
    color: whitesmoke;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 5.5rem;
    }
    p {
      font-size: 3rem;
    }
  }
`

const ImageArea = styled.div`
  position: relative;

  .div1 {
    position: absolute;
    top: 10px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }

  .div2 {
    z-index: 1;
    position: relative;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (min-width: 768px) {
  }
`
const ImageHero = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bg2: file(relativePath: { eq: "circle.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bg3: file(relativePath: { eq: "wave.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  const { bg, bg2, bg3 } = data
  console.log(bg)
  return (
    <Hero bg3={bg3.childImageSharp.fluid.src}>
      <div className="container">
        <TextArea>
          <div>
            <p>Someone is waiting to start their life with you</p>
            <h1>
              Do you want to met your <span> best Friend</span>?
            </h1>
            <a href="#dogs">Know more</a>
          </div>
        </TextArea>
        <ImageArea>
          <div className="div1">
            <Img fixed={bg2.childImageSharp.fixed} />
          </div>
          <div className="div2">
            <Img fixed={bg.childImageSharp.fixed} />
          </div>
        </ImageArea>
      </div>
      <div className="wave"> </div>
    </Hero>
  )
}

export default ImageHero
