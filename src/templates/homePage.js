import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"

export const HomePageTemplate = ({ title, image }) => (
  <div>
    <Layout>
      <section>
        <div className="container">
          <h1>{title}</h1>
          <img src={image} />
        </div>
      </section>
    </Layout>
  </div>
)

const HomePage = ({ data: { page } }) => (
  <HomePageTemplate {...page} {...page.frontmatter} />
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePageTemplate($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
