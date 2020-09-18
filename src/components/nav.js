import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: rebeccapurple;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  padding: 1rem;
  padding-bottom: 0;
  margin: 0;
  &:last-of-type {
  }
  &.active {
    border-bottom: 2px solid var(--white);
  }
`

const Nav = () => {
  return (
    <NavStyled>
      <NavLink to={"/"} activeClassName="active">
        Home
      </NavLink>
      <NavLink to={"/about"} activeClassName="active">
        About us
      </NavLink>
    </NavStyled>
  )
}

export default Nav
