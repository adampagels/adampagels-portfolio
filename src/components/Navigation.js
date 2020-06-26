import React, { useState } from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  font-size: 18px;
  list-style: none;
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: lowercase;
  margin: 0 auto;
  align-self: center;

  @media (max-width: 830px) {
    position: sticky;
    height: 8vh;
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
`

const StyledOuterUl = styled.ul`
  display: flex;
  padding: 0px;
`

const StyledInnerUl = styled.ul`
  margin: 0px auto;
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

const Navbox = styled.div`
  display: flex;
  height: 40%;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 830px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: red;
    transition: all 0.3s ease-in;
    top: 8vh;
    top: ${props => (props.open ? "-100%" : "0")};
    left: 0px;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: absolute;
  right: 14px;
  top: 30px;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
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
    <StyledNav>
      {navbarOpen ? <Navbox>{navbar}</Navbox> : <Navbox open>{navbar}</Navbox>}
      <div navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
    </StyledNav>
  )
}

export default Navigation
