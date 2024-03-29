import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageHeader from "../components/pageHeader"
import AButton from "../components/aButton"
import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons"

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

const StyledContainer = styled.div`
  opacity: 0;
  animation: ${EnterAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 1.3s;
`

const StyledImage1 = styled(GatsbyImage)`
  width: 100%;
  height: 50%;
  margin: 120px auto 60px auto;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const StyledH2 = styled.h2`
  font-size: 28px;
  margin-top: 0px;
  color: #333;
  font-weight: 500;
`

const StyledMarkdownDiv = styled.div`
  font-size: 18px;
  line-height: 150%;
  max-width: 700px;
  color: #222;
`

const StyledP = styled.p`
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 0px;
  color: #222;
`

const StyledProblemContainer = styled.div`
  margin: 120px auto;
  max-width: 700px;
`

const StyledTechStackRowContainer = styled.div`
  display: flex;
  margin: 0px auto;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 830px) {
    flex-direction: row;
  }
`

const StyledTechStack = styled.div`
  margin-left: 0px;
  margin-top: 120px;
  max-width: 600px;

  @media screen and (min-width: 830px) {
    width: 45%;
    margin-left: 70px;
    margin-top: 0px;
  }
`

const StyledTechListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  opacity: 0;
  animation: ${EnterAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
`

const StyledTechList = styled.p`
  font-size: 20px;
  margin-right: 5px;
  border-right: 2px solid #444;
  padding: 0 10px;
  margin-right: 0px;
  color: #6c675d;

  &:last-child {
    border-right: none;
  }
`

const StyledImage2 = styled(GatsbyImage)`
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

const StyledImage3 = styled(GatsbyImage)`
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

const StyledImage4 = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  margin-top: 4%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;

  @media screen and (min-width: 830px) {
    width: 48%;
    margin-top: 0px;
  }
`

const StyledImage5 = styled(GatsbyImage)`
  width: 100%;
  height: 50%;
  margin: 120px auto auto auto;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 1px, rgba(0, 0, 0, 0.11) 0px 2px 2px,
    rgba(0, 0, 0, 0.11) 0px 4px 4px, rgba(0, 0, 0, 0.11) 0px 8px 8px,
    rgba(0, 0, 0, 0.11) 0px 16px 16px, rgba(0, 0, 0, 0.11) 0px 32px 32px;
  border-radius: 10px;
`

const StyledLessonsLearnedContainer = styled.div`
  max-width: 700px;
  margin: 70px 0px;
`

const StyledAContainer = styled.div`
  opacity: 0;
  margin: 30px auto 0px 25px;
  align-self: center;
  display: flex;
  animation: ${EnterAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;

  @media screen and (min-width: 830px) {
    margin-top: -30px;
  }
`

const StyledTopLine = styled.div`
  display: flex;
`

const Project = ({ data }) => {
  const {
    title,
    stackDescription,
    lessonsLearned,
    theProblem,
    technology,
    codeLink,
    demoLink,
  } = data.contentfulProjects

  const projectImages = data.contentfulProjects.bodyImages

  return (
    <Layout>
      <SEO title={title} />
      <>
        <StyledTopLine>
          <PageHeader projectTemplate={true} heading={title} />
          <StyledAContainer>
            <AButton
              template={"template"}
              href={demoLink}
              icon={faGamepad}
            ></AButton>
            <AButton
              template={"template"}
              href={codeLink}
              icon={faCode}
            ></AButton>
          </StyledAContainer>
        </StyledTopLine>
        <StyledTechListContainer>
          {technology.map(tech => (
            <StyledTechList>{tech}</StyledTechList>
          ))}
        </StyledTechListContainer>
        <StyledContainer>
          <StyledMarkdownDiv
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulProjects.longDescription.childMarkdownRemark
                  .html,
            }}
          />
          <StyledImage1
            image={getImage(projectImages[0])}
            placeholder="blurred"
          />
          <StyledProblemContainer>
            <StyledH2>The Problem</StyledH2>
            <StyledP>{theProblem.theProblem}</StyledP>
          </StyledProblemContainer>
          <StyledTechStackRowContainer>
            <StyledImage2
              image={getImage(projectImages[4])}
              placeholder="blurred"
            />
            <StyledTechStack>
              <StyledH2>Tech Stack Explanation</StyledH2>
              <StyledP>{stackDescription.stackDescription}</StyledP>
            </StyledTechStack>
          </StyledTechStackRowContainer>
          <StyledImage5 image={getImage(projectImages[1])} />
          <ImageRow>
            <StyledImage3
              image={getImage(projectImages[3])}
              placeholder="blurred"
            />
            <StyledImage4
              image={getImage(projectImages[2])}
              placeholder="blurred"
            />
          </ImageRow>
          <StyledLessonsLearnedContainer>
            <StyledH2>Lessons Learned</StyledH2>
            <StyledP>{lessonsLearned.lessonsLearned}</StyledP>
          </StyledLessonsLearnedContainer>
        </StyledContainer>
      </>
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
        gatsbyImageData
      }
      codeLink
      demoLink
      technology
      bodyImages {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
