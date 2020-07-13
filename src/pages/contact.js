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
import {
  faMapMarkerAlt,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons"

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0 auto;
  border: 1px #f45e67;
  border-radius: 15px;
  justify-content: center;
  background-color: #f45e67;
  position: relative;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 520px) {
    width: 70%;
  }

  @media screen and (min-width: 930px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`

const StyledH1 = styled.h1`
  color: #333;
  font-family: sans-serif;
  font-size: 60px;
  text-align: center;
  margin-top: 70px;

  @media screen and (min-width: 930px) {
    margin-top: 40px;
  }
`

const StyledForm = styled.form`
  margin: 30px 30px;
  align-self: center;

  @media screen and (min-width: 930px) {
    align-self: auto;
    margin: 60px 30px;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 0px;
`

const StyledLi = styled.li`
  display: flex;
  margin-bottom: 20px;
`

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledContactInfo = styled.div`
  margin: 0px;
  background-color: #7158d1;
  border-radius: 15px;
  padding: 40px 20px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: 386px) {
    padding: 40px 45px;
  }

  @media screen and (min-width: 930px) {
    position: absolute;
    left: -95px;
    top: -36px;
    margin: 90px 30px;
  }
`

const StyledInputContainer = styled.div`
  margin: 10px 20px;
  text-align: center;
`

const StyledInput = styled.input`
  opacity: 0.9;
  background-color: transparent;
  border: 2px solid #fdfdfd;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 18px;
  font-family: sans-serif;
  width: 70vw;
  color: #fdfdfd;

  ::placeholder {
    color: #fdfdfd;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #fdfdfd;
    opacity: 1;
  }

  @media screen and (min-width: 520px) {
    width: 50vw;
  }

  @media screen and (min-width: 930px) {
    width: 25vw;
  }
`

const StyledTextArea = styled.textarea`
  opacity: 0.9;
  background-color: transparent;
  border: 2px solid #fdfdfd;
  border-radius: 15px;
  color: #fdfdfd;
  resize: vertical;
  padding: 5px 10px;
  font-family: sans-serif;
  font-size: 18px;
  min-height: 50px;
  height: 200px;
  width: 70vw;

  ::placeholder {
    color: #fdfdfd;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #fdfdfd;
  }

  @media screen and (min-width: 520px) {
    width: 50vw;
  }

  @media screen and (min-width: 930px) {
    width: 25vw;
  }
`

const StyledLabel = styled.label`
  display: block;
  text-align: left;
  visibility: hidden;
  font-size: 1px;
`

const StyledFAMarkerIcon = styled(FontAwesomeIcon)`
  margin-right: 25px;
  margin-left: 4px;
  color: #fdfdfd;
  opacity: 0.8;

  @media screen and (min-width: 346px) {
    margin-right: 48px;
  }
`

const StyledFAEnvelopeIcon = styled(FontAwesomeIcon)`
  margin-right: 18px;
  color: #fdfdfd;
  opacity: 0.8;

  @media screen and (min-width: 346px) {
    margin-right: 44px;
  }
`

const StyledFAFileIcon = styled(FontAwesomeIcon)`
  margin-right: 21px;
  margin-left: 4px;
  color: #fdfdfd;
  opacity: 0.8;

  @media screen and (min-width: 346px) {
    margin-right: 48px;
  }
`

const StyledTextA = styled.a`
  display: flex;
  font-size: 18px;
  margin-top: 1%;
  font-family: sans-serif;
  color: #fdfdfd;
  text-decoration: none;
  border-bottom: 2px solid #fa9670;
  cursor: pointer;

  @media screen and (min-width: 520px) {
    font-size: 18px;
  }
`

const StyledBottomLine = styled.div`
  margin-bottom: 0px;
  margin-top: 8px;
  width: 100%;
  background-color: #333;
  height: 2px;
`

const StyledTopLine = styled(StyledBottomLine)`
  margin-bottom: 8px;
`

const StyledButtonContainer = styled.div`
  text-align: center;
`

const StyledButton = styled.button`
  border-radius: 15px;
  border: none;
  padding: 1.5vh 4vw;
  background-color: #7158d1;
  color: #fdfdfd;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all ease-in-out 300ms;
  letter-spacing: 0.2px;

  :hover {
    background-color: #7e62ea;
  }
`

const StyledA = styled.a`
  color: #fa9670;
  padding: 20px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: 10px 10px;
  border-radius: 50px;
  border: 2px solid #fdfdfd;

  &:hover {
    box-shadow: 0px 37px 20px -15px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px);
  }
`

const Contact = () => (
  <Layout>
    <StyledH1>let's talk code</StyledH1>
    <SEO title="Contact" />
    <StyledDiv>
      <StyledForm action="action_page.php">
        <StyledInputContainer>
          <StyledLabel for="name">Name</StyledLabel>
          <StyledInput type="text" placeholder="Name" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel for="email">Email</StyledLabel>
          <StyledInput type="text" placeholder="Email" />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel for="subject">Message</StyledLabel>
          <StyledTextArea id="subject" placeholder="Message"></StyledTextArea>
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
      <StyledContactInfo>
        <StyledUl>
          <StyledLi>
            <StyledFAMarkerIcon size="2x" icon={faMapMarkerAlt} />
            <StyledTextA>Toronto, ON | Canada</StyledTextA>
          </StyledLi>

          <StyledLi>
            <StyledFAEnvelopeIcon size="2x" icon={faEnvelope} />
            <StyledTextA>Adam@adampagels.com</StyledTextA>
          </StyledLi>

          <StyledLi>
            <StyledFAFileIcon size="2x" icon={faFile} />
            <StyledTextA>Resume/CV</StyledTextA>
          </StyledLi>
        </StyledUl>
        <StyledTopLine />
        <StyledIconContainer>
          <StyledA
            href={"https://github.com/adampagels"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="2x" icon={faGithubAlt} />
          </StyledA>
          <StyledA
            href={"https://www.linkedin.com/in/adampagels/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
          </StyledA>
          <StyledA
            href={"https://angel.co/u/adam-pagels"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="2x" icon={faAngellist} />
          </StyledA>
        </StyledIconContainer>
        <StyledBottomLine />
      </StyledContactInfo>
    </StyledDiv>
  </Layout>
)

export default Contact
