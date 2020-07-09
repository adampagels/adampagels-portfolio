import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubAlt,
  faLinkedinIn,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Div = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border: 1px solid;
  border-radius: 15px;
  justify-content: center;
`

const StyledH1 = styled.h1`
  color: #333;
  font-family: sans-serif;
  font-size: 60px;
  text-align: center;
`

const StyledForm = styled.form`
  text-align: left;
  margin: 60px 20px;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
`

const StyledLi = styled.li`
  display: flex;
  margin-bottom: 20px;
`

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledRightColumn = styled.div`
  margin: 60px 20px;
`

const StyledInputContainer = styled.div`
  margin: 20px 20px;
`

const StyledInput = styled.input`
  width: 25vw;
`

const StyledTextArea = styled.textarea`
  resize: vertical;
  min-height: 50px;
  height: 200px;
  width: 25vw;
`

const Label = styled.label`
  font-family: sans-serif;
  display: block;
  text-align: left;
`

const StyledFAMarkerIcon = styled(FontAwesomeIcon)`
  margin-right: 50px;
`

const StyledFAEnvelopeIcon = styled(FontAwesomeIcon)`
  margin-right: 42px;
`

const StyledSpan = styled.span`
  color: #333;
  display: flex;
  font-size: 18px;
  margin-top: 1%;
`

const A = styled.a`
  color: #333;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 10px 0px 10px 0px;
  border-radius: 50px;
  border: 2px solid #7158d1;

  &:hover {
    box-shadow: 0px 37px 20px -15px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px);
  }

  @media screen and (min-width: 400px) {
    padding: 20px;
  }
`

const Contact = () => (
  <Layout>
    <StyledH1>let's talk code</StyledH1>
    <SEO title="Contact" />
    <Div>
      <StyledForm action="action_page.php">
        <StyledInputContainer>
          <Label for="name">Your name</Label>
          <StyledInput
            type="text"
            id="name"
            name="firstname"
            placeholder="Enter your name here"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <Label for="email">Your email</Label>
          <StyledInput
            type="text"
            id="email"
            name="lastname"
            placeholder="Enter your email here"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <Label for="subject">Your message</Label>
          <StyledTextArea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></StyledTextArea>
        </StyledInputContainer>
        <input type="submit" value="Submit" />
      </StyledForm>
      <StyledRightColumn>
        <StyledUl>
          <StyledLi>
            <StyledFAMarkerIcon size="2x" icon={faMapMarkerAlt} />
            <StyledSpan>Toronto, ON | Canada</StyledSpan>
          </StyledLi>

          <StyledLi>
            <StyledFAEnvelopeIcon size="2x" icon={faEnvelope} />
            <StyledSpan>adam@adampagels.com</StyledSpan>
          </StyledLi>
        </StyledUl>
        <StyledIconContainer>
          <A
            href={"https://github.com/adampagels"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="2x" icon={faGithubAlt} />
          </A>
          <A
            href={"https://www.linkedin.com/in/adampagels/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
          </A>
          <A
            href={"https://angel.co/u/adam-pagels"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="2x" icon={faAngellist} />
          </A>
        </StyledIconContainer>
      </StyledRightColumn>
    </Div>
  </Layout>
)

export default Contact
