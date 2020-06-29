import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import backgroundImage from "../images/backgroundImage.svg"

const StyledTopH1 = styled.h1`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 200%;
  background-clip: text;
  color: #111;
  font-size: 20vw;
  font-family: sans-serif;
  margin-top: 0px;
  margin-bottom: 0px;
  border: 1px solid #fbfbfb;
  border-bottom: 0px;
  
  @media (min-width: 1400px) {
    font-size: 281px;
  }
`

const StyledBottomH1 = styled.h1`
  font-size: 20vw;
  font-family: sans-serif;
  margin: -5% 0px 0px -1.6%;
  display: block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 200%;
  border: 1px solid #fbfbfb;
  border-bottom: 0px;

  @media (min-width: 1400px) {
    font-size: 281px;
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
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: 1px rgb(252, 247, 248);

  @media (min-width: 830px) {
    top: 53%;
  }
`

const StyledTopLineContainer = styled.div`
  display: flex;
`

const Span = styled.span``

const StyledH2 = styled.h2`
  font-family: sans-serif;
  font-weight: 300;
  color: #333;
  font-size: 3.5vw;
  font-style: italic;
  margin: auto 0px auto 2%;

  @media (min-width: 1400px) {
    font-size: 51px;
  }
`

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
