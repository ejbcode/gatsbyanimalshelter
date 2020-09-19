import React from "react"
import DogCard from "./DogCard"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const ListOfDogs = styled.ul`
  max-width: 1200px;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
`

const DogsContent = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsDog {
        nodes {
          title
          id
          slug
          content
          image {
            fluid(maxHeight: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const dogs = data.allDatoCmsDog.nodes

  return (
    <div>
      <h2>Dogs</h2>
      <p>Meet you future best friends</p>
      <div>
        <ListOfDogs>
          {dogs.map(dog => (
            <DogCard dog={dog} key={dog.id} />
          ))}
        </ListOfDogs>
      </div>
    </div>
  )
}

export default DogsContent
