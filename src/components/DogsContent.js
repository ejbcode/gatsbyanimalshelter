import React from "react"
import DogCard from "./DogCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  h2 {
  }
`

const ListOfDogs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
  }
`

const DogsContent = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsDog {
        nodes {
          name
          breed
          gender
          id
          slug
          image {
            fluid {
              srcSet
            }
          }
        }
      }
    }
  `)

  const dogs = data.allDatoCmsDog.nodes

  return (
    <div
      css={css`
        background-color: #f4f3eb;
      `}
    >
      <Container>
        <h2>Dogs</h2>
        <p>Meet you future best friends</p>
        <div>
          <ListOfDogs>
            {dogs.map(dog => (
              <DogCard dog={dog} key={dog.id} />
            ))}
          </ListOfDogs>
        </div>
      </Container>
    </div>
  )
}

export default DogsContent
