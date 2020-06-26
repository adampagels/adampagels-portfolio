import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/Background"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: #111;
  font-size: 50px;
  text-align: center;

  @media (min-width: 400px) {
    font-size: 60px;
  }

  @media (min-width: 485px) {
    font-size: 80px;
  }
`

const StyledH2Container = styled.div`
  margin-top: -40px;
`

const StyledH2 = styled.h2`
color: #111,
fontSize: 25,
`

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <StyledH1>Adam Pagels</StyledH1>
    <StyledH2Container>
      <StyledH2>Full-Stack Developer</StyledH2>
      <StyledH2>Based in Toronto</StyledH2>
    </StyledH2Container>
    <BackgroundImage />
  </Layout>
)

export default Index
