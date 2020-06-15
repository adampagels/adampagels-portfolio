import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: absolute;
`

const StyledNav = styled.nav`
  margin: 1rem;
`

const StyledUl = styled.ul`
  display: flex;
  font-size: 13px;
  list-style: none;
  margin: 0px;
  padding: 0px;
  position: fixed;
  width: 100%;
  font-size: 1.3rem;
`

const StyledLi = styled.li`
  display: block;
  padding: 10px;
  margin-right: 20px;
  & :first-child {
    margin-right: auto;
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Navigation = () => {
  return (
    <StyledContainer>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Adam Pagels</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/projects">Projects</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/about">About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/contact">Contact</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledContainer>
  )
}

export default Navigation
