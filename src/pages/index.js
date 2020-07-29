import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
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

const StyledTopH1 = styled.h1`
  color: #333;
  font-size: 20vw;
  margin: 0px;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 13vw;
  }

  @media (min-width: 1950px) {
    font-size: 195px;
  }
`

const StyledBottomH1 = styled.h1`
  color: #557276;
  font-size: 20vw;
  margin: 0px;

  @media (min-width: 500px) {
    font-size: 13vw;
  }

  @media (min-width: 1950px) {
    font-size: 195px;
  }
`
const StyledH2 = styled.h2`
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
      <StyledTopH1>adam</StyledTopH1>
      <StyledBottomH1>pagels</StyledBottomH1>
      {/* <StyledH2>
          Full-Stack Developer
        </StyledH2> */}
    </StyledContainer>
  </Layout>
)

export default Index
