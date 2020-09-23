import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const SocialIcon = styled.div`
  text-align: center;
  margin-top: 1rem;
  h3 {
    color: var(--white);
    font-size: 2.5rem;
  }
  .fab {
    color: whitesmoke;
    padding: 0.5rem 2rem;
    font-size: 6rem;
  }
`

const FooterLink = styled.div`
  color: var(--white);
  text-align: center;
  div {
    padding: 1rem;
  }
  h4 {
    color: palevioletred;
    font-weight: 700;
    font-size: 2rem;
  }
  span {
    margin-top: 0.8rem;
    display: inline-block;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const LinkStyled = styled(Link)`
  color: var(--white);
  font-size: 1.6rem;
  text-transform: capitalize;
`

const Social = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsPage {
        nodes {
          slug
          title
        }
      }
    }
  `)
  const links = data.allDatoCmsPage.nodes
  return (
    <div>
      <FooterLink>
        <div>
          <h4>Schedule</h4>
          <p>11:00 am to 6:00 p.m. 7 Days a week</p>
          <p> Services are available by appointment only.</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <span>Address:</span>
            <br />
            Av Presidente Kennedy. 3454
          </p>
          <p>
            <span>Phone:</span>
            <br />
            +56 98000 8000
          </p>
          <p>
            <span>Email:</span>
            <br />
            info@gatsbyshelter
            <br />
          </p>
        </div>
        <div>
          <h4>Links</h4>
          {links.map(link => (
            <LinkStyled to={`/${link.slug}`}>
              <p key={link.slug}>{link.title}</p>
            </LinkStyled>
          ))}
        </div>
      </FooterLink>
      <SocialIcon>
        <h3>Follow Us!</h3>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
      </SocialIcon>
    </div>
  )
}

export default Social
