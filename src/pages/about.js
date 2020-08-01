import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import styled from "styled-components"

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const StyledPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`

const StyledImageWrapper = styled.div`
  width: 450px;
`

const StyledH1 = styled.h1`
  color: #333;
  font-size: 60px;
  text-align: center;
  margin-top: 70px;

  @media screen and (min-width: 930px) {
    margin-top: 40px;
  }
`

const StyledIntroP = styled.p`
  color: #6c675d;
  font-size: 24px;
`

const StyledDescriptionP = styled.p`
  line-height: 150%;
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
    <StyledH1>learn more about me</StyledH1>
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras
        </StyledDescriptionP>
      </StyledPContainer>
    </StyledContentContainer>
  </Layout>
)

export default About
