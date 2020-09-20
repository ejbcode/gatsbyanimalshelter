import React from "react"
import { css } from "@emotion/core"

const Footer = ({ siteName }) => {
  const year = new Date().getFullYear()
  return (
    <header
      css={css`
        background: transparent;
        /* position: absolute; */
        width: 100%;
        z-index: 2;
        right: 0;
        left: 0;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          @media (min-width: 768px) {
            margin: 0 3rem;
          }
        `}
      >
        <h4
          css={css`
            font-size: 1.5rem;
            margin-left: 1rem;
            color: royalblue;
          `}
        >
          {siteName} {year}
        </h4>
      </div>
    </header>
  )
}

export default Footer
