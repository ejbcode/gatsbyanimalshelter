import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const Hero = styled.div`
  background: #16d8db;
  background-image: url("http://demo.highhay.com/landeux/img/bg-layer.png"),
    url("http://demo.highhay.com/landeux/img/bg-wave.png");
  background-repeat: no-repeat;
  background-position: center center, center bottom;
  background-size: cover, contain;

  .container {
    max-width: 1200px;

    flex: wrap;

    margin-right: auto;
    margin-left: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .imagearea {
    border: green solid 3px;
    line-height: 1.74;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    visibility: visible;
    font-family: "CerebriSans";
    color: #696969;
    box-sizing: border-box;
    position: relative;
    width: 100%;

    flex: 0 0 1;
    max-width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }
  }
`

const TextArea = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    color: whitesmoke;
    span {
      color: palevioletred;
    }
  }
  p {
    font-size: 2rem;
    color: #333;
  }
`

const ImageArea = styled.div`
  position: relative;

  border: black solid 1px;

  .div1 {
    position: absolute;
    top: 10px;
    margin: 0 auto;
    border: dashed 2px violet;
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }

  .div2 {
    z-index: 1;
    position: relative;

    img {
      margin: 0 auto;
      border: dashed 2px yellow;
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
            <h1>
              Do you want to get a <span> best Friend?</span>
            </h1>
            <p>Adopt!, don't Shop</p>
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
      </div>
    </Hero>
  )
}

export default ImageHero
