import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import styled, { keyframes } from "styled-components"
import PageHeader from "../components/pageHeader"

const EnterLeftAnimation = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const EnterRightAnimation = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const StyledPContainer = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  animation: ${EnterRightAnimation};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  @media screen and (min-width: 1024px) {
    max-width: 490px;
  }
`

const StyledImageWrapper = styled.div`
  opacity: 0;
  width: 320px;
  margin-top: 20px;
  margin-right: 16px;
  margin-bottom: 30px;
  animation: ${EnterLeftAnimation};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  @media screen and (min-width: 380px) {
    width: 350px;
    margin-right: 12px;
  }

  @media screen and (min-width: 500px) {
    width: 450px;
    margin-right: 0px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

const StyledIntroP = styled.p`
  color: #6c675d;
  font-size: 24px;
`

const StyledDescriptionP = styled.p`
  color: #333;
  line-height: 150%;
  font-size: 17px;
  width: 100%;
`

const ImageBorder = styled.div`
  height: 1px;
  width: 100%;
  background-color: #6c675d;
  margin-left: 10px;
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader heading={"learn more about me"} />
    <StyledContentContainer>
      <StyledImageWrapper>
        <Image />
        <ImageBorder />
      </StyledImageWrapper>
      <StyledPContainer>
        <StyledIntroP>
          I'm a front-end developer based in Toronto, Canada.
        </StyledIntroP>
        <StyledDescriptionP>
          From a young age, I enjoyed patiently working with puzzles. When most
          kids were at their breaking point, I found myself further interested
          in completing the task, as I knew the final uncovering would be worth
          the reward. As I continued developing my skills and gained a rapid
          interest in coding, I paired it with my passion for turning complex
          problems into beautiful solutions. Being a scholar at heart, I
          continue to strive for improvement of myself as a developer, whether
          it's refining my current set of skills or looking to add new
          technologies to my arsenal to provide the highest quality in each
          project I execute. Appreciating the finite value of time, when I'm not
          coding, you can find me learning anything I can get my hands on - how
          to juggle, how to quickly solve a Rubik's Cube or even how to speak
          different languages.
        </StyledDescriptionP>
      </StyledPContainer>
    </StyledContentContainer>
  </Layout>
)

export default About
