import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

const Blog = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges
  console.log(blogPosts)
  return (
    <Layout>
      <SEO title="Blog" />
      <PageHeader heading={"blog coming soon"} />
    </Layout>
  )
}

export default Blog

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            date
            tags
          }
        }
      }
    }
  }
`
