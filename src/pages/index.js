import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

const EnterAnimationUp = keyframes`
  from {
    transform: translateY(80px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const EnterAnimationDown = keyframes`
  from {
    transform: translateY(-80px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
`

const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 47%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
  @media (min-width: 830px) {
    top: 50%;
  }
`

const StyledNameContainer = styled.div`
  display: flex;
`

const StyledH1 = styled.h1`
  opacity: 0;
  animation: ${EnterAnimationUp};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  color: #333;
  font-size: 15vw;
  margin: 0px;
  text-align: center;
  @media (min-width: 500px) {
    font-size: 13vw;
  }
  @media (min-width: 1950px) {
    font-size: 195px;
  }

  &:nth-child(2) {
    color: #9e1e1e;
    animation: ${EnterAnimationDown};
    animation-duration: 1.2s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
`

const StyledH2 = styled.h2`
  opacity: 0;
  color: #333;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 3.5vw;
  font-style: italic;
  margin: 1% 3% auto 2%;
  animation: ${FadeInAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1.6s;
  @media (min-width: 500px) {
    font-size: 2.6vw;
  }
  @media (min-width: 1950px) {
    font-size: 47px;
  }

  &:nth-child(2) {
    opacity: 0;
    animation: ${FadeInAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.3s;
  }
`

const StyledH2Div = styled.div`
  display: flex;
  justify-content: space-between;
`

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <StyledContainer>
      <StyledNameContainer>
        <StyledH1>adam</StyledH1>
        <StyledH1>pagels</StyledH1>
      </StyledNameContainer>
      <StyledH2Div>
        <StyledH2>Front-End Developer</StyledH2>
        <StyledH2>Based in Toronto</StyledH2>
      </StyledH2Div>
    </StyledContainer>
  </Layout>
)

export default Index
