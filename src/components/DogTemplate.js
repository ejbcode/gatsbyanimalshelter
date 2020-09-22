import React from "react"
import Image from "gatsby-image"
import Layout from "./layout"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;

  h1 {
    text-align: center;
    margin-top: 4rem;
  }
`

export const query = graphql`
  query MyQuery($slug: String!) {
    allDatoCmsDog(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        name
        breed
        gender
        age
        content
        image {
          fluid(maxHeight: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const DogTemplate = props => {
  const dog = props.data.allDatoCmsDog.nodes[0]
  return (
    <Layout>
      <MainStyled>
        <h1>{dog.name}</h1>
        <Image fluid={dog.image.fluid} />
        <h2>{dog.gender}</h2>
        <h2>{dog.age}</h2>

        <h2>{dog.breed}</h2>

        <p>{dog.content}</p>
      </MainStyled>
    </Layout>
  )
}

export default DogTemplate
