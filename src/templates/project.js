import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledH1 = styled.h1`
  font-size: 50px;
`

const StyledImage1 = styled(Img)`
  width: 100%;
  height: 50%;
  margin: 50px auto 60px auto;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const StyledH2 = styled.h2`
  font-size: 28px;
`

const StyledMarkdownDiv = styled.div`
  font-size: 18px;
  line-height: 180%;

  a {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 900;
    color: #7158d1;
    text-decoration: none;
    border-bottom: 2px solid #fa9670;
    cursor: pointer;
  }
`

const StyledP = styled.p`
  font-size: 18px;
  line-height: 180%;
`

const StyledProblemContainer = styled.div`
  margin: 70px auto;
  max-width: 700px;
`

const StyledTechStackRowContainer = styled.div`
  display: flex;
  margin: 120px auto;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 830px) {
    flex-direction: row;
  }
`

const StyledTechStack = styled.div`
  width: 80%;
  margin-left: 0px;
  margin-top: 100px;

  @media screen and (min-width: 830px) {
    width: 45%;
    margin-left: 70px;
    margin-top: 0px;
  }
`

const StyledImage2 = styled(Img)`
  width: 100%;
  height: 50%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;

  @media screen and (min-width: 830px) {
    width: 45%;
  }
`

const ImageRow = styled.div`
  display: flex;
  margin: 4% auto 120px auto;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 830px) {
    flex-direction: row;
    margin: 4% auto 120px auto;
    justify-content: space-between;
  }
`

const StyledImage3 = styled(Img)`
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;

  @media screen and (min-width: 830px) {
    width: 48%;
  }
`

const StyledImage4 = styled(Img)`
  width: 100%;
  height: 100%;
  margin-top: 34px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;

  @media screen and (min-width: 830px) {
    width: 48%;
    margin-top: 0px;
  }
`

const StyledImage5 = styled(Img)`
  width: 100%;
  height: 50%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const StyledLessonsLearnedContainer = styled.div`
  max-width: 700px;
  margin: 70px 0px;
`

const Project = ({ data }) => {
  const {
    title,
    stackDescription,
    lessonsLearned,
    theProblem,
  } = data.contentfulProjects

  let projectMedia = []
  {
    data.contentfulProjects.bodyImages.map(project => {
      return projectMedia.push(project)
    })
  }

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <div style={{ maxWidth: "700px" }}>
          <StyledH1>{title}</StyledH1>
          <StyledMarkdownDiv
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulProjects.longDescription.childMarkdownRemark
                  .html,
            }}
          />
        </div>
        <StyledImage1 fluid={projectMedia[0].fluid} />
        <StyledProblemContainer>
          <StyledH2>The Problem</StyledH2>
          <StyledP>{theProblem.theProblem}</StyledP>
        </StyledProblemContainer>
        <StyledTechStackRowContainer>
          <StyledImage2 fluid={projectMedia[4].fluid} />
          <StyledTechStack>
            <StyledH2>Tech Stack Explanation</StyledH2>
            <StyledP>{stackDescription.stackDescription}</StyledP>
          </StyledTechStack>
        </StyledTechStackRowContainer>
        <StyledImage5 fluid={projectMedia[1].fluid} />
        <ImageRow>
          <StyledImage3 fluid={projectMedia[3].fluid} />
          <StyledImage4 fluid={projectMedia[2].fluid} />
        </ImageRow>
        <StyledLessonsLearnedContainer>
          <h2>Lessons Learned</h2>
          <StyledP>{lessonsLearned.lessonsLearned}</StyledP>
        </StyledLessonsLearnedContainer>
        <Link to="/projects">View more projects</Link>
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
      lessonsLearned {
        lessonsLearned
      }
      theProblem {
        theProblem
      }
      titleImage {
        file {
          url
        }
      }
      bodyImages {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
