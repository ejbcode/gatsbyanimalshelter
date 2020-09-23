import React from "react"
import styled from "@emotion/styled"

const CtaStyled = styled.div`
  background: var(--primary);
  background-image: url("https://www.dogstrust.org.uk/_home/news/111270bg_repeat_bone_trans_10.png");
  height: auto;
  position: relative;
  text-align: center;
  border: 0;
  overflow: hidden;
  h2 {
    padding: 1rem 0 1rem 0;
    font-size: 3rem;
    color: whitesmoke;
  }
  p {
    width: 90%;
    font-size: 2rem;
    display: inline-block;
  }

  a {
    display: inline-block;
    color: var(--white);
    background-color: palevioletred;
    margin: 2rem;
    border: solid 1px var(--white);
    padding: 0.5rem 2rem;
    margin-bottom: 220px;
  }

  .line {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 52;
    height: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://www.petcofoundation.org/wp-content/themes/petco/library/images/jagged-edge-gray.svg");
  }
  .container {
    max-width: 1200px;
    margin: 40px auto;
  }

  @media (min-width: 768px) {
    h2 {
      padding: 4rem 0 1rem 0;
      font-size: 4rem;
      color: whitesmoke;
    }
  }
`

const ImageSection = styled.div`
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  position: absolute;

  bottom: -20px;
  right: 0;
  left: 0;
`

const Cta = () => {
  return (
    <CtaStyled>
      <div className="line"></div>
      <div className="container">
        <h2>
          Your generous gift can help us change even more pets' lives today.
        </h2>
        <p>
          With your help, together, we could help making a difference in the
          lives of animals.
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Donate
        </a>
        <ImageSection>
          <img
            src="https://www.nylabone.com/-/media/images/nylabone-na/us/homepage/footer_dog.png?h=258&la=en&w=386&hash=F9CF004F37A587486BE9FE9DAD780A77F15D1B01"
            alt=""
          />
        </ImageSection>
      </div>
    </CtaStyled>
  )
}

export default Cta
