import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

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
    bottom: -1px;
    position: absolute;
    width: 100%;
    height: 30%;
    z-index: 5;
    background-image: url("http://demo.highhay.com/landeux/img/bg-wave.png");
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
    {
      file(relativePath: { eq: "hero1.png" }) {
        childImageSharp {
          fixed(fit: COVER, grayscale: false) {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `)
  const img = data.file.childImageSharp.fixed.srcWebp
  return (
    <Hero>
      <div className="container">
        <TextArea>
          <div>
            <p>Someone is waiting to start their life with you</p>
            <h1>
              Do you want to met your <span> best Friend</span>?
            </h1>
            <a href="#">Know more</a>
          </div>
        </TextArea>
        <ImageArea>
          <div className="div1">
            <img
              className="img1"
              src="https://demo.hasthemes.com/mitech-preview/assets/images/hero/home-infotechno-main-slider-slide-01-image-01.png"
              alt=""
            />
          </div>
          <div className="div2">
            <img
              className="img2"
              src="https://yanhu3vvef11e7osn1qzldyb-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/golden-retriever-PNG.png"
              alt=""
            />
          </div>
        </ImageArea>
      </div>{" "}
      <div className="wave"> </div>
    </Hero>
  )
}

export default ImageHero
