import React from "react"
import Layout from "../components/Layout/layout"

export const DefaultPageTemplate = ({ title, image }) => (
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

const DefaultPage = ({ data: { page } }) => (
  <DefaultPageTemplate {...page} {...page.frontmatter} />
)

export default DefaultPage

export const pageQuery = graphql`
  ## Query for Default data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query DefaultPageTemplate($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`
