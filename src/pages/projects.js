import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Projects = ({ data }) => {
  const projects = data.allContentfulProjects.edges
  return (
    <Layout>
      <SEO title="Projects" />
      <h1>{"Here's a list of all projects!"}</h1>
      <div className="projects">
        {projects.map(({ node: project }) => (
          <div key={project.id}>
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default Projects
export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProjects(limit: 1000) {
      edges {
        node {
          id
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
    }
  }
`
