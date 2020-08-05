import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faGamepad,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"
import PageHeader from "../components/pageHeader"

const EnterAnimation = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyledProjectsContentContainerOdd = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  animation: ${EnterAnimation};
  animation-duration: 1.2s;
  animation-delay: ${props =>
    props.order === 3 ? "2s" : props.order * 1.2 + "s"};
  animation-fill-mode: forwards;

  @media screen and (min-width: 830px) {
    width: 900px;
    margin-bottom: 50px;
    flex-direction: row;
  }
`

const StyledProjectsContentContainerEven = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column-reverse;
  margin: 100px 0px 100px 0px;
  animation: ${EnterAnimation};
  animation-duration: 1.2s;
  animation-delay: ${props => props.order * 0.8 + "s"};
  animation-fill-mode: forwards;

  @media screen and (min-width: 830px) {
    width: 900px;
    margin: 0px 0px 50px 0px;
    flex-direction: row;
  }
`

const StyledProjectTitle = styled.h2`
  font-size: 40px;
  margin: auto 0px;

  @media screen and (min-width: 475px) {
    font-size: 59px;
  }
`

const StyledTitleLink = styled(Link)`
  transition: all ease-in-out 300ms;
  text-decoration: none;
  color: #333;
  font-family: "Roboto", sans-serif;
}

:hover {
  opacity: 0.6;
}

:active {
  font-size: 80px;
}

  &:visited {
    color: #333;
  }
`

const ImageLink = styled(Link)`
  transition-duration: 0.3s;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`

const StyledProjectsContent = styled.div`
  display: block;
  margin-right: 30px;
  margin-top: 10px;

  &:nth-child(even) {
    margin-left: 0px;

    @media screen and (min-width: 830px) {
      margin-left: 30px;
    }
  }

  @media screen and (min-width: 830px) {
    margin-top: 0px;
  }
  align-self: center;
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
`

const StyledContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`

const StyledProjects = styled.div`
  &:nth-child(even) {
    display: flex;
    justify-content: flex-end;
  }

  align-self: center;
`

const StyledLink = styled(Link)`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border-bottom: 2px solid #9e1e1e;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  font-weight: 500;

  :hover {
    opacity: 0.6;
  }

  :active {
    font-size: 20px;
  }

  &:visited {
    color: #333;
  }
`

const StyledAContainer = styled.div`
  margin: auto;
  align-self: center;
  display: flex;

  @media screen and (min-width: 370px) {
    margin: 0px 0px 0px 25px;
  }
`

const StyledA = styled.a`
  color: #fdfdfd;
  background-color: #9e1e1e;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 10px 0px 10px 10px;
  border-radius: 50%;
  border: 2px solid #9e1e1e;

  &:hover {
    box-shadow: 0px 37px 20px -15px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px);
  }

  @media screen and (min-width: 475px) {
    padding: 10px;
  }
`

const StyledFADemoIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  padding: 5px;
`

const StyledFACodeIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  padding: 5px;
`

const StyledFAArrowRight = styled(FontAwesomeIcon)`
  font-size: 13px;
  margin: 0px 0px 1px 5px;
`

const StyledTopLine = styled.div`
  display: flex;
`

const StyledDescription = styled.p`
  font-size: 18px;
  color: #444;
  line-height: 170%;
`

const Projects = ({ data }) => {
  const projects = data.allContentfulProjects.edges
  return (
    <Layout>
      <SEO title="Projects" />
      <PageHeader heading={"what i've been working on"} />
      <StyledContainer>
        {projects.map(({ node: project }) => (
          <StyledProjects>
            <>
              {project && project.title === projects[1].node.title ? (
                <StyledProjectsContentContainerEven order={project.order}>
                  {console.log(project.order * 1)}
                  <StyledProjectsContent>
                    <StyledTopLine>
                      <StyledProjectTitle>
                        <StyledTitleLink
                          fade
                          duration={0.5}
                          to={`/projects/${project.slug}`}
                        >
                          {project.title}
                        </StyledTitleLink>
                      </StyledProjectTitle>
                      <StyledAContainer>
                        <StyledA
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFADemoIcon icon={faGamepad} />
                        </StyledA>
                        <StyledA
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFACodeIcon icon={faCode} />
                        </StyledA>
                      </StyledAContainer>
                    </StyledTopLine>
                    <StyledDescription>
                      {project.shortDescription}
                    </StyledDescription>
                    <StyledLink
                      fade
                      duration={0.5}
                      to={`/projects/${project.slug}`}
                    >
                      View Project
                      <StyledFAArrowRight icon={faChevronRight} />
                    </StyledLink>
                  </StyledProjectsContent>
                  <ImageLink
                    fade
                    duration={0.5}
                    to={`/projects/${project.slug}`}
                  >
                    <StyledImg fluid={project.titleImage.fluid} />
                  </ImageLink>
                </StyledProjectsContentContainerEven>
              ) : (
                <StyledProjectsContentContainerOdd order={project.order}>
                  <ImageLink
                    fade
                    duration={0.5}
                    to={`/projects/${project.slug}`}
                  >
                    <StyledImg fluid={project.titleImage.fluid} />
                  </ImageLink>
                  <StyledProjectsContent>
                    <StyledTopLine>
                      <StyledProjectTitle>
                        <StyledTitleLink
                          fade
                          duration={0.5}
                          to={`/projects/${project.slug}`}
                        >
                          {project.title}
                        </StyledTitleLink>
                      </StyledProjectTitle>
                      <StyledAContainer>
                        <StyledA
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFADemoIcon icon={faGamepad} />
                        </StyledA>
                        <StyledA
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <StyledFACodeIcon icon={faCode} />
                        </StyledA>
                      </StyledAContainer>
                    </StyledTopLine>
                    <StyledDescription>
                      {project.shortDescription}
                    </StyledDescription>
                    <StyledLink
                      fade
                      duration={0.5}
                      to={`/projects/${project.slug}`}
                    >
                      View Project
                      <StyledFAArrowRight icon={faChevronRight} />
                    </StyledLink>
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
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
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
