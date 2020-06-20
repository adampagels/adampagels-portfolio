import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  font-size: 18px;
  list-style: none;
  width: 100%;
`

const StyledLink = styled(Link)`
  padding-left: 0px;
  font-size: 18px;
  display: block;
  text-decoration: none;
  padding: 10px;
`

const StyledOuterUl = styled.ul`
  display: flex;
  padding: 0px;
`

const StyledInnerUl = styled.ul`
  margin: auto;
  display: flex;
`

const StyledInnerLi = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;
  margin-right: 20px;
`

const StyledOuterLi = styled.li`
  display: flex;
  text-decoration: none;
`

const Navigation = () => {
  return (
    <StyledNav>
      <StyledOuterUl>
        <StyledOuterLi>
          <StyledLink to="/">Adam Pagels</StyledLink>
        </StyledOuterLi>
      </StyledOuterUl>
      <StyledInnerUl>
        <StyledInnerLi>
          <StyledLink to="/projects">Projects</StyledLink>
        </StyledInnerLi>
        <StyledInnerLi>
          <StyledLink to="/about">About</StyledLink>
        </StyledInnerLi>
        <StyledInnerLi>
          <StyledLink to="/blog">Blog</StyledLink>
        </StyledInnerLi>
      </StyledInnerUl>
      <StyledOuterUl>
        <StyledOuterLi>
          <StyledLink to="/contact">Get in touch</StyledLink>
        </StyledOuterLi>
      </StyledOuterUl>
    </StyledNav>
  )
}

export default Navigation
