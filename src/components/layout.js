import React from "react"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)
  const { siteName, titleSuffix } = data.datoCmsSite.globalSeo
  return (
    <>
      <Global
        styles={css`
          :root {
            --white: #fff;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            box-sizing: border-box;
            font-size: 62.5%;
          }
          * body {
            font-family: "Roboto", sarif;
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
            background: var(--bg);
            max-width: 1200px;
            margin: 0 auto;
          }

          h1,
          h2,
          h3 {
            margin: 0;
          }
          h1,
          h2 {
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{siteName}</title>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        /> */}

        <meta name="description" content={titleSuffix} />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer siteName={siteName} />
    </>
  )
}

export default Layout
