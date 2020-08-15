import React, { useState } from "react"
import Link from "gatsby-link"
import styled, { keyframes, css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "@reach/router"

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  width: 100%;
  display: flex;
  background-color: #fff6e6;
  position: relative;
  justify-content: space-between;
  text-transform: lowercase;
  margin: -20px auto 0px auto;
  align-self: center;
  z-index: 6;

  @media (max-width: 830px) {
    transition: all 0.22s ease-out;
    background-color: #fff6e6
    margin-top: 0px;
    position: fixed;
    height: 82px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const ArrowPulseRight = keyframes`
  0% { transform: translateX(0px); }
  50% {transform: translateX(5px); }
  100% {transform: translateX(0px); }
`

const StyledFAArrow = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: #fdfdfd;
  transform: ${props =>
    props.location.pathname.includes("contact") && "rotate(90deg)"};

  @media (min-width: 830px) {
    color: #9e1e1e;
  }
`

const StyledHover = styled.div`
  pointer-events: none;
  border-radius: 15px;
  opacity: ${props =>
    (props.location.pathname.length < 2 ||
      props.location.pathname.includes("contact")) &&
    "0"};
  transition: 0.5s all;
  position: absolute;
  background-color: #9e1e1e;
  transform: ${props =>
    props.location.pathname.includes("projects") && "translateX(11px)"};
  transform: ${props =>
    props.location.pathname.includes("about") && "translateX(144px)"};
  transform: ${props =>
    props.location.pathname.includes("blog") && "translateX(255px)"};
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
    color: #333;

    &:visited {
      color: #333;
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
  margin-right: 20px;

  &:nth-child(1) {
    :hover {
      ~ ${StyledHover} {
        transform: translateX(11px);
        width: 93px;
        opacity: 1;
      }
    }
  }

  &:nth-child(2) {
    :hover {
      ~ ${StyledHover} {
        transform: translateX(144px);
        width: 75px;
        opacity: 1;
      }
    }
  }

  &:nth-child(3) {
    :hover {
      ~ ${StyledHover} {
        transform: translateX(255px);
        width: 65px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 830px) {
    &:nth-child(1) {
      border-top: 2px solid #6c675d;
    }
    border: 1px solid #6c675d;
    justify-content: center;
    margin-right: 0px;
    width: 100%;
    background-color: #333;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  font-weight: 500;
  transition: 0.5s;
  padding-left: 0px;
  font-size: 20px;
  display: block;
  text-decoration: none;
  padding: 20px;
  color: #333;

  @media (min-width: 830px) {
    font-size: 18px;
    &.active {
      &:visited {
        color: ${props => (props.inner ? "#333" : "#9e1e1e")};
      }
    }
  }

  &:visited {
    color: #333;
  }

  :hover {
    color: ${props => (props.inner ? "#333" : "#9e1e1e")};
    ${StyledFAArrow} {
      animation-name: ${props =>
        !props.location.pathname.includes("contact") &&
        css`
          ${ArrowPulseRight}
        `};
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }

  @media (max-width: 830px) {
    color: #fdfdfd;

    &:visited {
      color: #fdfdfd;
    }
  }
`

const StyledOuterLi = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;

  @media (max-width: 830px) {
    border-top: 1px solid #6c675d;
    border-bottom: 2px solid #6c675d;
    width: 100%;
    justify-content: center;
    background-color: #333;
    padding: 0px;
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
  background-color: #333;
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
    background-color: #333;
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
  top: 26px;
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
          <StyledLink location={location} activeClassName="active" to="/">
            Adam Pagels
          </StyledLink>
        </StyledOuterLi>
      </StyledOuterUl>
      <StyledInnerUl>
        <StyledInnerLi location={location}>
          <StyledLink location={location} inner={true} to="/projects">
            Projects
          </StyledLink>
        </StyledInnerLi>
        <StyledInnerLi location={location}>
          <StyledLink location={location} inner={true} to="/about">
            About
          </StyledLink>
        </StyledInnerLi>
        <StyledInnerLi location={location}>
          <StyledLink location={location} inner={true} to="/blog">
            Blog
          </StyledLink>
        </StyledInnerLi>
        <StyledHover location={location} />
      </StyledInnerUl>
      <StyledOuterUl>
        <StyledOuterLi>
          <StyledLink
            location={location}
            partiallyActive={true}
            activeClassName="active"
            to="/contact"
          >
            Get in touch
            <StyledFAArrow location={location} size="1x" icon={faArrowRight} />
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
