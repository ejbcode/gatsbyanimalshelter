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
            --white: #eee;
            --primary: #16d8db;
            --black: #334;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            box-sizing: border-box;
            font-size: 62.5%;
            scroll-behavior: smooth;
          }
          * body {
            font-family: "Roboto", sarif;
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
            background: var(--bg);
            margin: 0 auto;
            color: var(--black);
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
          a {
            text-decoration: none;
            color: var(--black);
            font-size: 2rem;
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw=="
          crossorigin="anonymous"
        />
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
