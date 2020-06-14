import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Project = ({ data }) => {
  const { title, body } = data.contentfulProjects
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <p className="body-text">{body.body}</p>
        <Link to="/projects">View more projects</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default Project
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      titleImage {
        file {
          url
        }
      }
    }
  }
`
