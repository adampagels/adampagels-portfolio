import React, { useState } from "react"
import Link from "gatsby-link"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "@reach/router"

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  width: 100%;
  display: flex;
  background-color: #FAD1A7;
  position: relative;
  justify-content: space-between;
  text-transform: lowercase;
  margin: -20px auto 0px auto;
  align-self: center;
  z-index: 6;

  @media (max-width: 830px) {
    transition: all 0.22s ease-out;
    background-color: #FAD1A7
    margin-top: 0px;
    position: fixed;
    height: 82px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const ArrowPulse = keyframes`
  0% { transform: translateX(0px); }
  50% {transform: translateX(5px); }
  100% {transform: translateX(0px); }
`

const StyledFAArrow = styled(FontAwesomeIcon)`
  margin-left: 10px;
`

const StyledHover = styled.div`
  pointer-events: none;
  border-radius: 15px;
  display: ${props =>
    (props.location.pathname.length < 2 ||
      props.location.pathname.includes("contact")) &&
    "none"};
  transition: 0.5s all;
  position: absolute;
  background-color: #557276;
  transform: ${props =>
    props.location.pathname.includes("projects") && "translateX(10px)"};
  transform: ${props =>
    props.location.pathname.includes("about") && "translateX(138px)"};
  transform: ${props =>
    props.location.pathname.includes("blog") && "translateX(246px)"};
  top: 50px;
  width: ${props => props.location.pathname.includes("projects") && "93px"};
  width: ${props => props.location.pathname.includes("about") && "75px"};
  width: ${props => props.location.pathname.includes("blog") && "65px"};
  height: 5px;
  z-index: 1;

  @media (max-width: 830px) {
    display: none;
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
  position: relative;

  @media (max-width: 830px) {
    flex-direction: column;
    padding-left: 0px;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-top: 60px;
  }
`

const StyledInnerLi = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;
  margin-right: 20px;

  &:nth-child(1) {
    :hover {
      ~ ${StyledHover} {
        transform: translateX(10px);
        width: 93px;
      }
    }
  }

  &:nth-child(2) {
    :hover {
      ~ ${StyledHover} {
        transform: translateX(138px);
        width: 75px;
      }
    }
  }

  &:nth-child(3) {
    :hover {
      ~ ${StyledHover} {
        transform: translateX(246px);
        width: 65px;
      }
    }
  }

  @media (max-width: 830px) {
    border: 1px solid #8c6eff;
    justify-content: center;
    margin-right: 0px;
    width: 100%;
    background-color: #7158d1;
  }
`

const StyledLink = styled(Link)`
  padding-left: 0px;
  font-size: 18px;
  display: block;
  text-decoration: none;
  padding: 10px;
  color: #333;
  font-weight: 700;

  &:visited {
    color: #333;
  }

  &:last-child {
    :hover {
      ${StyledFAArrow} {
        animation-name: ${ArrowPulse};
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
  }

  @media (max-width: 830px) {
    color: #fbfbfb;

    &:visited {
      color: #fbfbfb;
    }
  }
`

const StyledOuterLi = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;

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

const Toggle = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 7px;
  border-radius: 39px;
  padding: 25px;
  top: 6px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (max-width: 830px) {
    display: flex;
  }
`

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const location = useLocation()

  const navbar = (
    <>
      <StyledOuterUl>
        <StyledOuterLi>
          <StyledLink to="/">Adam Pagels</StyledLink>
        </StyledOuterLi>
      </StyledOuterUl>
      <StyledInnerUl>
        <StyledInnerLi>
          <StyledLink
            partiallyActive={true}
            activeClassName="active"
            to="/projects"
          >
            Projects
          </StyledLink>
        </StyledInnerLi>
        <StyledInnerLi>
          <StyledLink to="/about">About</StyledLink>
        </StyledInnerLi>
        <StyledInnerLi>
          <StyledLink to="/blog">Blog</StyledLink>
        </StyledInnerLi>
        <StyledHover location={location} />
      </StyledInnerUl>
      <StyledOuterUl>
        <StyledOuterLi>
          <StyledLink
            partiallyActive={true}
            activeClassName="active"
            to="/contact"
          >
            Get in touch
            <StyledFAArrow size="1x" icon={faArrowRight} />
          </StyledLink>
        </StyledOuterLi>
      </StyledOuterUl>
    </>
  )
  return (
    <StyledNav open={navbarOpen}>
      {navbarOpen ? <Navbox>{navbar}</Navbox> : <Navbox open>{navbar}</Navbox>}
      <StyledHeaderLink to="/">Adam Pagels</StyledHeaderLink>
      <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open={"open"} /> : <Hamburger />}
      </Toggle>
    </StyledNav>
  )
}

export default Navigation
