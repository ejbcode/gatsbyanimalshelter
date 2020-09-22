import React from "react"
import Layout from "../components/layout"
import ImageHero from "../components/ImageHero"
import HomeContent from "../components/homeContent"
import DogsContent from "../components/DogsContent"
import Cta from "../components/cta"

const IndexPage = () => (
  <Layout>
    <ImageHero />
    <HomeContent />
    <Cta />
    <DogsContent />
  </Layout>
)

export default IndexPage
