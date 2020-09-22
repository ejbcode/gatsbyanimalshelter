import React from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
// https://codepen.io/mcraiganthony/pen/NxGxqm?editors=1100
const Card = styled.div`
  max-height: 24rem;
  min-width: 250px;
  width: 33%;
  margin: 0 auto;
`
const ImageStyled = styled(Image)`
  border: green dashed 2px;
  object-fit: cover;
  width: auto;
  height: 23rem;
`

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const DogCard = ({ dog }) => {
  const { slug, content, name, image, breed, gender } = dog
  return (
    <Card
      css={css`
        border: 1px solid #e1e1e1;
        border: red 1px solid;

        margin-bottom: 1rem;
      `}
    >
      <ImageStyled fluid={image.fluid} alt={name} />
      <div
        css={css`
          padding: 3rem;
          border: red 1px solid;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {name}
        </h3>
        <h2>{breed}</h2>
        <h2>{gender}</h2>
        <Button to={slug}> know more </Button>
      </div>
    </Card>
  )
}

export default DogCard
