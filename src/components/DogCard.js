import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Card = styled.div`
  flex: 0 1 600px;
  background: white;
  margin-bottom: 2rem;
  margin: 1rem 0.25em;
  border-radius: 2rem 2rem 0 0;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  img {
    border: 0;
    display: block;
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }
  @media screen and (min-width: 601px) {
    flex: 0 1 calc(50% - 1rem);
    img {
      height: 25rem;
    }
  }

  @media screen and (min-width: 60em) {
    flex: 0 1 calc(33% - 1rem);
    img {
    }
  }
`
const Picture = styled.div`
  position: relative;

  :before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 38px;
    border-radius: 50% 50% 0 0;
    position: absolute;
    bottom: -10px;
    right: 0px;
    left: 0px;
    background-color: white;
  }
`
const Content = styled.div`
  line-height: 1;
  padding: 1.5rem 3rem 4rem;
  h3 {
    margin-top: 0;
    margin-bottom: 0.2em;
    font-weight: bold;
    color: palevioletred;
  }
`
const DogCard = ({ dog }) => {
  const { slug, name, image, breed, gender } = dog
  return (
    <Card>
      <Link to={slug}>
        <Picture>
          <img src={image.fluid.srcSet} alt={name} />
        </Picture>
        <Content>
          <h3>{name}</h3>
          <p>{breed}</p>
          <p>{gender}</p>
        </Content>
      </Link>
    </Card>
  )
}

export default DogCard
