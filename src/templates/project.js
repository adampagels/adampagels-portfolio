import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Project = ({ data }) => {
  const { title, stackDescription } = data.contentfulProjects

  console.log(data.contentfulProjects.bodyImages)
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <div style={{ maxWidth: "600px" }}>
          <h1>{title}</h1>
          <p
            className="body"
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulProjects.longDescription.childMarkdownRemark
                  .html,
            }}
          />
        </div>
        <p>{stackDescription.stackDescription}</p>
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
      longDescription {
        childMarkdownRemark {
          html
        }
      }
      stackDescription {
        stackDescription
      }
      titleImage {
        file {
          url
        }
      }
    }
  }
`
