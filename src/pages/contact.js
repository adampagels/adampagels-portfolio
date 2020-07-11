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

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 70%;
  margin: 0 auto;
  border: 1px #f45e67;
  border-radius: 15px;
  justify-content: flex-start;
  background-color: #f45e67;
  position: relative;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
`

const StyledH1 = styled.h1`
  color: #333;
  font-family: sans-serif;
  font-size: 60px;
  text-align: center;
`

const StyledForm = styled.form`
  text-align: left;
  margin: 60px 30px;
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

const StyledRightColumn = styled.div`
  margin: 90px 30px;
  background-color: #7158d1;
  position: absolute;
  left: -95px;
  border-radius: 15px;
  padding: 40px 45px;
  top: -36px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
`

const StyledInputContainer = styled.div`
  margin: 10px 20px;
`

const StyledInput = styled.input`
  opacity: 0.9;
  background-color: transparent;
  border: 2px solid #fdfdfd;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 18px;
  font-family: sans-serif;
  width: 25vw;
  color: #fdfdfd;

  ::placeholder {
    color: #fdfdfd;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: red;
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
  width: 25vw;

  ::placeholder {
    color: #fdfdfd;
    opacity: 1;
  }

  ::-ms-input-placeholder {
    color: #fdfdfd;
  }
`

const Label = styled.label`
  font-family: sans-serif;
  display: block;
  text-align: left;
  visibility: hidden;
  font-size: 1px;
`

const StyledFAMarkerIcon = styled(FontAwesomeIcon)`
  margin-right: 48px;
  margin-left: 2px;
  color: #fdfdfd;
  opacity: 0.8;
`

const StyledFAEnvelopeIcon = styled(FontAwesomeIcon)`
  margin-right: 42px;
  color: #fdfdfd;
  opacity: 0.8;
`

const StyledFAFileIcon = styled(FontAwesomeIcon)`
  margin-right: 47px;
  margin-left: 4px;
  color: #fdfdfd;
  opacity: 0.8;
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

const A = styled.a`
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
          <Label for="name">Name</Label>
          <StyledInput type="text" placeholder="Name" />
        </StyledInputContainer>
        <StyledInputContainer>
          <Label for="email">Email</Label>
          <StyledInput type="text" placeholder="Email" />
        </StyledInputContainer>
        <StyledInputContainer>
          <Label for="subject">Message</Label>
          <StyledTextArea id="subject" placeholder="Message"></StyledTextArea>
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
      <StyledRightColumn>
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
        <StyledBottomLine />
      </StyledRightColumn>
    </Div>
  </Layout>
)

export default Contact
