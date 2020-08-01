import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import styled from "styled-components"

const StyledP = styled.p`
  text-align: center;
  font-size: 18px;
`

const StyledLink = styled(Link)`
  line-height: 170%;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  border-bottom: 2px solid #9e1e1e;
  cursor: pointer;
  transition: all ease-in-out 300ms;

  :hover {
    opacity: 0.6;
  }

  :active {
    font-size: 20px;
  }

  &:visited {
    color: #333;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageHeader heading={"404: page not found "} />
    <StyledP>
      Return to the <StyledLink to={"/"}>homepage</StyledLink> or feel free to
      <StyledLink to={"/contact"}> reach out</StyledLink> if something isn't
      working properly.
    </StyledP>
  </Layout>
)

export default NotFoundPage
