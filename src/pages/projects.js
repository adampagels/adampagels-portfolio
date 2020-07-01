import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faGamepad,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

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
  font-size: 40px;
  margin: auto 0px;

  @media screen and (min-width: 400px) {
    font-size: 50px;
  }
`

const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: #333;
}

  &:visited {
    color: #333;
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
  margin: auto;
  align-self: center;
  display: flex;

  @media screen and (min-width: 370px) {
    margin: 0px 0px 0px 25px;
  }
`

const A = styled.a`
  color: #333;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 10px 0px 10px 10px;
  border-radius: 50px;
  border: 2px solid #7158d1;

  &:hover {
    box-shadow: 0px 37px 20px -15px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px);
  }

  @media screen and (min-width: 400px) {
    padding: 10px;
  }
`

const StyledFADemoIcon = styled(FontAwesomeIcon)`
  font-size: 20px;

  @media screen and (min-width: 400px) {
    font-size: 25px;
  }
`

const StyledFACodeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;

  @media screen and (min-width: 400px) {
    font-size: 25px;
  }
`

const StyledFaChevronRight = styled(FontAwesomeIcon)`
  font-size: 13px;
  margin-left: 5px;
`

const StyledTopLine = styled.div`
  display: flex;
`

const StyledDescription = styled.p`
  font-size: 18px;
  color: #222;
  line-height: 170%;
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
                    <StyledTopLine>
                      <StyledProjectTitle>
                        <StyledTitleLink to={`/projects/${project.slug}`}>
                          {project.title}
                        </StyledTitleLink>
                      </StyledProjectTitle>
                      <StyledAContainer>
                        <A
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFADemoIcon icon={faGamepad} />
                        </A>
                        <A
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFACodeIcon icon={faCode} />
                        </A>
                      </StyledAContainer>
                    </StyledTopLine>
                    <StyledDescription>
                      {project.shortDescription}
                    </StyledDescription>
                    <Link to={`/projects/${project.slug}`}>
                      View Project
                      <StyledFaChevronRight icon={faChevronRight} />
                    </Link>
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
                    <S>
                      <StyledProjectTitle>
                        <StyledTitleLink to={`/projects/${project.slug}`}>
                          {project.title}
                        </StyledTitleLink>
                      </StyledProjectTitle>
                      <StyledAContainer>
                        <A
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFADemoIcon icon={faGamepad} />
                        </A>
                        <A
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFACodeIcon icon={faCode} />
                        </A>
                      </StyledAContainer>
                    </S>
                    <StyledDescription>
                      {project.shortDescription}
                    </StyledDescription>
                    <Link to={`/projects/${project.slug}`}>
                      View Project
                      <StyledFaChevronRight icon={faChevronRight} />
                    </Link>
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
