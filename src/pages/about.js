import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import styled from "styled-components"

const StyledContentContainer = styled.div``

const StyledImageWrapper = styled.div``

const StyledImage = styled(Image)``

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <StyledContentContainer>
      <StyledImageWrapper>
        <StyledImage />
      </StyledImageWrapper>
    </StyledContentContainer>
  </Layout>
)

export default About
