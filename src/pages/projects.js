import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  width: 900px;
  margin-bottom: 50px;
`

const D = styled.div`
  display: block;
  margin-right: 30px;
  &:nth-child(even) {
    margin-left: 30px;
  }
  align-self: center;
`

const StyledImg = styled.img`
  height: 300px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
`

const StyledContainer = styled.div`
  margin-top: 100px;
`

const StyledProjects = styled.div`
  &:nth-child(even) {
    display: flex;
    justify-content: flex-end;
  }
  align-self: center;
`

const IconContainer = styled.div`
  margin-top: 50px;
`

const Projects = ({ data }) => {
  const projects = data.allContentfulProjects.edges
  return (
    <Layout>
      <SEO title="Projects" />
      <StyledContainer>
        {projects.map(({ node: project }) => (
          <StyledProjects>
            <>
              {project && project.title === projects[1].node.title ? (
                <StyledDiv>
                  <D>
                    <Link to={`/projects/${project.slug}`}>
                      <h2>{project.title}</h2>
                    </Link>
                    <p>{project.shortDescription}</p>
                    <Link to={`/projects/${project.slug}`}>View Project</Link>
                    <IconContainer>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </IconContainer>
                  </D>
                  <StyledImg
                    alt={project.title}
                    src={project.titleImage.file.url}
                  />
                </StyledDiv>
              ) : (
                <StyledDiv>
                  <StyledImg
                    alt={project.title}
                    src={project.titleImage.file.url}
                  />
                  <D>
                    <Link to={`/projects/${project.slug}`}>
                      <h2>{project.title}</h2>
                    </Link>
                    <p>{project.shortDescription}</p>
                    <Link to={`/projects/${project.slug}`}>View Project</Link>
                    <IconContainer>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </IconContainer>
                  </D>
                </StyledDiv>
              )}
            </>
          </StyledProjects>
        ))}
      </StyledContainer>
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
          shortDescription
          codeLink
          demoLink
        }
      }
    }
  }
`
