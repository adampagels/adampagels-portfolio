import React, { useState } from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  width: 100%;
  display: flex;
  background-color: #fbfbfb;
  position: relative;
  justify-content: space-between;
  text-transform: lowercase;
  margin: -20px auto 0px auto;
  align-self: center;
  z-index: 6;

  @media (max-width: 830px) {
    transition: all 0.22s ease-out;
    background-color: ${props => (!props.open ? "transparent" : "#fbfbfb")};
    margin-top: 0px;
    position: fixed;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const StyledLink = styled(Link)`
  padding-left: 0px;
  font-size: 18px;
  display: block;
  text-decoration: none;
  padding: 10px;
  color: #7158d1;
  &:visited {
    color: #7158d1;
  }

  @media (max-width: 830px) {
    color: #fbfbfb;

    &:visited {
      color: #fbfbfb;
    }
  }
`

const StyledHeaderLink = styled(Link)`
  display: none;

  @media (max-width: 830px) {
    padding-left: 0px;
    font-size: 18px;
    text-decoration: none;
    display: block;
    position: fixed;
    top: 20px;
    left: 25px;
    color: #7158d1;

    &:visited {
      color: #7158d1;
    }
  }
`

const StyledOuterUl = styled.ul`
  display: flex;
  padding: 0px;

  @media (max-width: 830px) {
    margin: 0px auto;
    width: 100%;
    justify-content: center;

    &:first-child {
      display: none;
    }
  }
`

const StyledInnerUl = styled.ul`
  margin: 0px auto;
  display: flex;
  padding-left: 0px;

  @media (max-width: 830px) {
    flex-direction: column;
    padding-left: 0px;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-top: 70px;
  }
`

const StyledInnerLi = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;
  margin-right: 20px;
  font-family: sans-serif;

  @media (max-width: 830px) {
    border: 1px solid #8c6eff;
    justify-content: center;
    margin-right: 0px;
    width: 100%;
    background-color: #7158d1;
  }
`

const StyledOuterLi = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;
  font-family: sans-serif;

  @media (max-width: 830px) {
    border: 1px solid #8c6eff;
    width: 100%;
    justify-content: center;
    background-color: #7158d1;
  }
`

const Navbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 830px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    transition: all 0.4s ease-in-out;
    top: ${props => (props.open ? "-180%" : "0")};
    left: 0px;
  }
`

const Hamburger = styled.div`
  display: none;
  background-color: #7158d1;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: fixed;
  right: 18px;
  top: 30px;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #7158d1;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 830px) {
    display: flex;
`

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navbar = (
    <>
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
    </>
  )
  return (
    <StyledNav open={navbarOpen}>
      {navbarOpen ? <Navbox>{navbar}</Navbox> : <Navbox open>{navbar}</Navbox>}
      <StyledHeaderLink to="/">Adam Pagels</StyledHeaderLink>
      {navbarOpen ? (
        <Hamburger open={"open"} onClick={() => setNavbarOpen(!navbarOpen)} />
      ) : (
        <Hamburger onClick={() => setNavbarOpen(!navbarOpen)} />
      )}
    </StyledNav>
  )
}

export default Navigation
