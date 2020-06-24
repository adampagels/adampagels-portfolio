import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-size: 50px;
`

const StyledImage1 = styled.img`
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
`

const StyledTechStack = styled.div`
  width: 45%;
  margin-left: 70px;
`

const StyledImage2 = styled.img`
  width: 45%;
  height: 50%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const ImageRow = styled.div`
  display: flex;
  margin: 4% auto 120px auto;
  justify-content: space-between;
`

const StyledImage3 = styled.img`
  width: 48%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const StyledImage4 = styled.img`
  width: 48%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const StyledImage5 = styled.img`
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
      return projectMedia.push(project.file.url)
    })
  }

  console.log(data.contentfulProjects.bodyImages)
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <div style={{ maxWidth: "700px" }}>
          <StyledH1>{title}</StyledH1>
          <StyledP
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulProjects.longDescription.childMarkdownRemark
                  .html,
            }}
          />
        </div>
        <StyledImage1 src={projectMedia[0]} />
        <StyledProblemContainer>
          <StyledH2>The Problem</StyledH2>
          <StyledP>{theProblem.theProblem}</StyledP>
        </StyledProblemContainer>
        <StyledTechStackRowContainer>
          <StyledImage2 src={projectMedia[4]} />
          <StyledTechStack>
            <StyledH2>Tech Stack Explanation</StyledH2>
            <StyledP>{stackDescription.stackDescription}</StyledP>
          </StyledTechStack>
        </StyledTechStackRowContainer>
        <StyledImage5 src={projectMedia[1]} />
        <ImageRow>
          <StyledImage3 src={projectMedia[3]} />
          <StyledImage4 src={projectMedia[2]} />
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
        file {
          url
        }
      }
    }
  }
`
