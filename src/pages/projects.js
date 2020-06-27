import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons"

const StyledProjectsContentContainerOdd = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 830px) {
    width: 900px;
    margin-bottom: 50px;
    flex-direction: row;
  }
`

const StyledProjectsContentContainerEven = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 100px 0px 100px 0px;

  @media screen and (min-width: 830px) {
    width: 900px;
    margin: 0px 0px 50px 0px;
    flex-direction: row;
  }
`

const StyledProjectTitle = styled.h2`
  font-size: 30px;
  margin-top: 25px;

  @media screen and (min-width: 400px) {
    font-size: 40px;
    margin-top: 25px;
  }

  @media screen and (min-width: 500px) {
    font-size: 50px;
    margin-top: 25px;
  }

  @media screen and (min-width: 830px) {
    margin-top: 0px;
  }
`

const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: #111;

  &:visited {
    color: #111;
  }
`

const StyledProjectsContent = styled.div`
  display: block;
  margin-right: 30px;

  &:nth-child(even) {
    margin-left: 0px;

    @media screen and (min-width: 830px) {
      margin-left: 30px;
    }
  }
  align-self: center;
`

const StyledImg = styled.img`
  height: 50%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);

  @media screen and (min-width: 830px) {
    height: 300px;
    width: 400px;
  }
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

const StyledAContainer = styled.div`
  margin-top: 50px;
`

const A = styled.a`
  display: inline-block;
  background: #111;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 40px;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: all ease-in-out 300ms;
  text-decoration: none;
  margin: 10px 30px 10px 0px;
}

&:hover {
  box-shadow: 0px 37px 20px -15px rgba(0,0,0,0.2);
  transform: translate(0px, -10px);
}
`

const StyledFADemoIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-left: 10px;
`

const StyledFACodeIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  margin: 0px 0px 1px 10px;
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
                <StyledProjectsContentContainerEven>
                  <StyledProjectsContent>
                    <StyledProjectTitle>
                      <StyledTitleLink to={`/projects/${project.slug}`}>
                        {project.title}
                      </StyledTitleLink>
                    </StyledProjectTitle>
                    <p>{project.shortDescription}</p>
                    <Link to={`/projects/${project.slug}`}>View Project</Link>
                    <StyledAContainer>
                      <A
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                        <StyledFADemoIcon icon={faGamepad} />
                      </A>
                      <A
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                        <StyledFACodeIcon icon={faCode} />
                      </A>
                    </StyledAContainer>
                  </StyledProjectsContent>
                  <StyledImg
                    alt={project.title}
                    src={project.titleImage.file.url}
                  />
                </StyledProjectsContentContainerEven>
              ) : (
                <StyledProjectsContentContainerOdd>
                  <StyledImg
                    alt={project.title}
                    src={project.titleImage.file.url}
                  />
                  <StyledProjectsContent>
                    <StyledProjectTitle>
                      <StyledTitleLink to={`/projects/${project.slug}`}>
                        {project.title}
                      </StyledTitleLink>
                    </StyledProjectTitle>
                    <p>{project.shortDescription}</p>
                    <Link to={`/projects/${project.slug}`}>View Project</Link>
                    <StyledAContainer>
                      <A
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                        <StyledFADemoIcon icon={faGamepad} />
                      </A>
                      <A
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                        <StyledFACodeIcon icon={faCode} />
                      </A>
                    </StyledAContainer>
                  </StyledProjectsContent>
                </StyledProjectsContentContainerOdd>
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
    allContentfulProjects(sort: { fields: order }) {
      edges {
        node {
          id
          title
          slug
          titleImage {
            file {
              url
            }
          }
          order
          shortDescription
          codeLink
          demoLink
        }
      }
    }
  }
`
