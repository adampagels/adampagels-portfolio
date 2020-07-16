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
  color: #f75f68;
  font-size: 20vw;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (min-width: 1400px) {
    font-size: 281px;
  }
`

const StyledBottomH1 = styled.h1`
  color: #7158d1;
  font-size: 20vw;
  font-family: sans-serif;
  margin: -5% 0px 0px -1.6%;
  @media (min-width: 1400px) {
    font-size: 281px;
  }
`

const StyledTopLineContainer = styled.div`
  display: flex;
`

const StyledH2 = styled.h2`
  font-family: sans-serif;
  color: #fa9770;
  font-size: 3.5vw;
  font-style: italic;
  margin: auto 0px auto 2%;
  @media (min-width: 1400px) {
    font-size: 51px;
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
