import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledH1 = styled.h1`
  color: #333;
  font-size: 60px;
  text-align: center;
  margin-top: 70px;

  @media screen and (min-width: 830px) {
    margin-top: 40px;
  }
`

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <StyledH1>blog coming soon</StyledH1>
  </Layout>
)

export default Blog
