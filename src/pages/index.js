import React from "react"
import Layout from "../components/layout"
import ImageHero from "../components/ImageHero"
import HomeContent from "../components/homeContent"
import DogsContent from "../components/DogsContent"

const IndexPage = () => (
  <Layout>
    <ImageHero />
    <HomeContent />
    <DogsContent />
  </Layout>
)

export default IndexPage
