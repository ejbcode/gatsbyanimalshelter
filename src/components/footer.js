import React from "react"
import Social from "./Social"
import { css } from "@emotion/core"

const Footer = ({ siteName }) => {
  const year = new Date().getFullYear()
  return (
    <footer
      css={css`
        width: 100%;
        background: royalblue;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
        `}
      >
        <Social />
        <h4
          css={css`
            color: var(--white);
            font-size: 1.5rem;
            text-align: center;
            display: block;

            span {
              color: orange;
            }
          `}
        >
          © Copyright - {siteName} - {year} <br /> Designed with 💙 by{" "}
          <a
            href="http://github.com/ejbcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>ejbcode</span>
          </a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
