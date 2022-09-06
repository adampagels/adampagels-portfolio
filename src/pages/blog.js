import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const Blog = ({data}) => (
  <Layout>
      {console.log(data)}
    <SEO title="Blog" />
    <PageHeader heading={"blog coming soon"} />
  </Layout>
)

export default Blog

export const query = graphql`
    query doing($id: String!) {
      markdownRemark(id: { eq: $id }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  `
