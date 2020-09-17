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
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
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
