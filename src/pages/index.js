import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 47%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
  background-size: 200%;
  @media (min-width: 830px) {
    top: 50%;
  }
`

const StyledNameContainer = styled.div`
  display: flex;
`

const StyledH1 = styled.h1`
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
  }
`

const StyledH2 = styled.h2`
  color: #333;
  font-family: "Roboto", sans-serif;
  opacity: 0.7;
  font-weight: 500;
  font-size: 3.5vw;
  font-style: italic;
  margin: auto 0px auto 2%;
  @media (min-width: 500px) {
    font-size: 2.6vw;
  }
  @media (min-width: 1950px) {
    font-size: 47px;
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
