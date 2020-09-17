import React from "react"
import { css } from "@emotion/core"
import Nav from "./nav"

const Header = () => {
  return (
    <header
      css={css`
        background: transparent;
        position: absolute;
        width: 100%;
        z-index: 2;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          border: solid red 2px;
          @media (min-width: 768px) {
          }
        `}
      >
        <h1
          css={css`
            font-size: 2.5rem;
            margin-left: 1rem;
          `}
        >
          Logo
        </h1>
        <Nav />
      </div>
    </header>
  )
}

export default Header
