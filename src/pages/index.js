import React from "react"
import Layout from "../components/layout"
import ImageHero from "../components/ImageHero"
import HomeContent from "../components/homeContent"
import DogsContent from "../components/DogsContent"
import Cta from "../components/cta"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <ImageHero bg={data.bg} bg2={data.bg2} />
      <HomeContent />
      <Cta />
      <DogsContent />
    </Layout>
  )
}

export default IndexPage
