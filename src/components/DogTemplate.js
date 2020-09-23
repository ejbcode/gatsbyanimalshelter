import React from "react"
import Image from "gatsby-image"
import Layout from "./layout"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
  h1 {
    text-align: center;
  }
`

const MainStyled = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .column {
    flex: 0 1 600px;
    border: solid 3px red;
    width: 100%;
    img {
      width: 100%;
      border: solid 3px green;
      height: 100%;
    }
  }
  h1 {
    text-align: center;
    margin-top: 4rem;
  }

  @media (min-width: 786px) {
    flex-direction: row-reverse;
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
      <Container>
        <h2>🖐🏼Hi, I`m {dog.name}🐕🐶</h2>
        <MainStyled>
          <div className="column">
            <Image fluid={dog.image.fluid} />
          </div>
          <div className="column">
            <h3>Facts about me</h3>
            <h4>
              {" "}
              <span>Gender</span> {dog.gender}
            </h4>
            <h4>
              {" "}
              <span>Age</span> {dog.age} years old
            </h4>

            <h4>
              <span>Breed</span> {dog.breed}
            </h4>

            <p>{dog.content}</p>
          </div>
        </MainStyled>
      </Container>
    </Layout>
  )
}

export default DogTemplate
