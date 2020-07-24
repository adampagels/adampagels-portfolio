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
    top: 53%;
  }
`

const StyledTopH1 = styled.h1`
  font-family: sans-serif;
  color: #333;
  font-size: 20vw;
  margin: 0px 0px 0px 1.6%;

  @media (min-width: 500px) {
    font-size: 15vw;
  }

  @media (min-width: 1950px) {
    font-size: 275px;
  }
`

const StyledBottomH1 = styled.h1`
  color: #557276;
  font-size: 20vw;
  font-family: sans-serif;
  margin: -5% 0px 0px 0px;

  @media (min-width: 500px) {
    font-size: 15vw;
  }

  @media (min-width: 1950px) {
    font-size: 275px;
  }
`

const StyledTopLineContainer = styled.div`
  display: flex;
`

const StyledH2 = styled.h2`
  font-family: sans-serif;
  color: #333;
  opacity: 0.9;
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

const Span = styled.span``

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <StyledContainer>
      <StyledTopLineContainer>
        <StyledTopH1>ADAM</StyledTopH1>
        <StyledH2>
          Full-Stack <Span>Developer</Span>
        </StyledH2>
      </StyledTopLineContainer>
      <StyledBottomH1>PAGELS</StyledBottomH1>
    </StyledContainer>
  </Layout>
)

export default Index
