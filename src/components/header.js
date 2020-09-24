import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Nav from "./nav"

const Header = () => {
  return (
    <header
      css={css`
        background: transparent;
        width: 100%;
        z-index: 2;
        right: 0;
        left: 0;
        margin: 0 auto;
      `}
    >
      <div
        css={css`
          max-width: 1200px;

          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          @media (min-width: 768px) {
          }
        `}
      >
        <Link to="/">
          <h1
            css={css`
              font-size: 3.5rem;
              margin-left: 1rem;
              color: royalblue;
            `}
          >
            <i class="fas fa-paw"></i> Paws
          </h1>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header
