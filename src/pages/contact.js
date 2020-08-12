import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
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
  faCheck,
  faTimes,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"
import PageHeader from "../components/pageHeader"
import AButton from "../components/aButton"

const FadeInAnimation = keyframes`
  from {
    transform: translateX(-80px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const StyledContainer = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0 auto 33.5px;
  border: 1px #f45e67;
  border-radius: 15px;
  justify-content: center;
  background-color: #9e1e1e;
  position: relative;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  animation: ${FadeInAnimation};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  @media screen and (min-width: 555px) {
    width: 70%;
  }

  @media screen and (min-width: 1020px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`

const StyledForm = styled.form`
  margin: 30px 30px;
  align-self: center;

  @media screen and (min-width: 1020px) {
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
  opacity: 0;
  margin: 0px;
  background-color: #cc5428;
  border-radius: 15px;
  padding: 40px 20px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  animation: ${FadeInAnimation};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;

  @media screen and (min-width: 386px) {
    padding: 40px 45px;
  }

  @media screen and (min-width: 1020px) {
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

  @media screen and (min-width: 555px) {
    width: 50vw;
  }

  @media screen and (min-width: 1020px) {
    width: 25vw;
  }

  @media screen and (min-width: 1460px) {
    width: 370px;
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

  @media screen and (min-width: 555px) {
    width: 50vw;
  }

  @media screen and (min-width: 1020px) {
    width: 25vw;
  }

  @media screen and (min-width: 1460px) {
    width: 370px;
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

  @media screen and (min-width: 445px) {
    margin-right: 48px;
  }
`

const StyledFAEnvelopeIcon = styled(FontAwesomeIcon)`
  margin-right: 21px;
  color: #fdfdfd;
  opacity: 0.8;

  @media screen and (min-width: 445px) {
    margin-right: 44px;
  }
`

const StyledFAWarningIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

const StyledFASuccessIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

const StyledFAErrorIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

const StyledFAFileIcon = styled(FontAwesomeIcon)`
  margin-right: 25px;
  margin-left: 4px;
  color: #fdfdfd;
  opacity: 0.8;

  @media screen and (min-width: 445px) {
    margin-right: 48px;
  }
`

const StyledTextA = styled.a`
  display: flex;
  font-size: 18px;
  margin-top: 1%;
  color: #fdfdfd;
  text-decoration: none;
  border-bottom: 2px solid #fdfdfd;
  cursor: pointer;
  transition: all ease-in-out 300ms;

  :hover {
    opacity: 0.5;
  }

  :active {
    opacity: 1;
  }
`

const StyledP = styled(StyledTextA)`
  margin-bottom: 0px;
  border: none;
  cursor: text;

  :hover {
    opacity: 1;
  }

  :active {
    font-size: 18px;
  }
`

const StyledBottomLine = styled.div`
  margin-bottom: 0px;
  margin-top: 8px;
  width: 100%;
  background-color: #333;
  opacity: 0.9;
  height: 2px;
`

const StyledTopLine = styled(StyledBottomLine)`
  margin-bottom: 8px;
`

const StyledButtonContainer = styled.div`
  text-align: center;
`

const StyledButton = styled.button`
  transition: 2s padding;
  border-radius: 15px;
  border: none;
  padding: ${props =>
    props.formStatus === "success" || props.formStatus === "error"
      ? "10px 18vw"
      : "10px 4vw"};
  background-color: #fdfdfd;
  color: #333;
  font-size: 16px;
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: ${props => props.formStatus !== "success" && "pointer"};
  transition: all ease-in-out 300ms;
  letter-spacing: 0.2px;

  :hover {
    background-color: ${props => props.formStatus !== "success" && "#dadada"};
  }

  @media screen and (min-width: 555px) {
    padding: ${props =>
      props.formStatus === "success" || props.formStatus === "error"
        ? "10px 15vw"
        : "10px 4vw"};
  }

  @media screen and (min-width: 1020px) {
    padding: ${props =>
      props.formStatus === "success" || props.formStatus === "error"
        ? "10px 7vw"
        : "10px 4vw"};
  }

  @media screen and (min-width: 1460px) {
    padding: ${props =>
      props.formStatus === "success" || props.formStatus === "error"
        ? "10px 118px"
        : "10px 4vw"};
  }
`

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledSuccessMessage = styled.p`
  margin: 0px;
  color: green;
  animation-name: ${FadeIn};
  animation-duration: 1s;
`

const StyledErrorMessage = styled.p`
  margin: 0px;
  color: red;
  animation-name: ${FadeIn};
  animation-duration: 1s;
`

const StyledNameWarning = styled.p`
  font-size: 18px;
  margin: 0px;
  transition: 2s all;
  color: yellow;
  text-align: center;
  display: ${props => (props.nameWarning ? "block" : "none")};
`

const StyledEmailWarning = styled(StyledNameWarning)`
  display: ${props => (props.emailWarning ? "block" : "none")};
`

const StyledMessageWarning = styled(StyledNameWarning)`
  display: ${props => (props.messageWarning ? "block" : "none")};
  margin-bottom: 14px;
`

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [botMessage, setBotMessage] = useState("")
  const [formStatus, setFormStatus] = useState(null)
  const [buttonText, setButtonText] = useState("Send Message")
  const [nameWarning, setNameWarning] = useState(false)
  const [emailWarning, setEmailWarning] = useState(false)
  const [messageWarning, setMessageWarning] = useState(false)

  useEffect(() => {
    displayButtonText()
  }, [formStatus])

  const clearFormState = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const validateForm = () => {
    if (formStatus === "success") {
      return null
    }
    if (name.length < 3) {
      setNameWarning(true)
    } else {
      setNameWarning(false)
    }
    if (email.length < 6) {
      setEmailWarning(true)
    } else {
      setEmailWarning(false)
    }
    if (message.length < 8) {
      setMessageWarning(true)
    } else {
      setMessageWarning(false)
    }
  }

  const displayButtonText = () => {
    const successMessage = (
      <StyledSuccessMessage>
        <StyledFASuccessIcon size="1x" icon={faCheck} /> Message sent
      </StyledSuccessMessage>
    )
    const errorMessage = (
      <StyledErrorMessage>
        <StyledFAErrorIcon size="1x" icon={faTimes} />
        Try again later
      </StyledErrorMessage>
    )
    if (formStatus === "success") {
      setButtonText(successMessage)
      clearFormState()
    } else if (formStatus === "error") {
      setButtonText(errorMessage)
    } else {
      setButtonText("Send Message")
    }
    return buttonText
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (
      nameWarning ||
      emailWarning ||
      messageWarning ||
      formStatus === "success"
    ) {
      return null
    } else {
      const form = event.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          name,
          email,
          message,
          botMessage,
        }),
      })
        .then(() => setFormStatus("success"))
        .catch(() => setFormStatus("error"))
    }
  }
  return (
    <Layout>
      <PageHeader heading={"let's talk code"} />
      <SEO title="Contact" />
      <StyledContainer>
        <StyledForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out if you're human
              <input
                name="bot-field"
                onChange={event => setBotMessage(event.target.value)}
              />
            </label>
          </p>
          <StyledInputContainer>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </StyledInputContainer>
          <StyledNameWarning nameWarning={nameWarning}>
            <StyledFAWarningIcon size="1x" icon={faExclamationTriangle} />
            Your name must be at least 3 characters
          </StyledNameWarning>
          <StyledInputContainer>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </StyledInputContainer>
          <StyledEmailWarning emailWarning={emailWarning}>
            <StyledFAWarningIcon size="1x" icon={faExclamationTriangle} />
            Your email must be at least 6 characters
          </StyledEmailWarning>
          <StyledInputContainer>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledTextArea
              type="text"
              placeholder="Message"
              name="message"
              value={message}
              onChange={event => setMessage(event.target.value)}
            ></StyledTextArea>
          </StyledInputContainer>
          <StyledMessageWarning messageWarning={messageWarning}>
            <StyledFAWarningIcon size="1x" icon={faExclamationTriangle} />
            Your message must be at least 8 characters
          </StyledMessageWarning>
          <StyledButtonContainer>
            <StyledButton
              onClick={() => validateForm()}
              type="submit"
              formStatus={formStatus}
            >
              {buttonText}
            </StyledButton>
          </StyledButtonContainer>
        </StyledForm>
        <StyledContactInfo>
          <StyledUl>
            <StyledLi>
              <StyledFAMarkerIcon size="2x" icon={faMapMarkerAlt} />
              <StyledP>Toronto, ON | Canada</StyledP>
            </StyledLi>

            <StyledLi>
              <StyledFAEnvelopeIcon size="2x" icon={faEnvelope} />
              <StyledTextA href="mailto: adam@adampagels.com">
                Adam@adampagels.com
              </StyledTextA>
            </StyledLi>

            <StyledLi>
              <StyledFAFileIcon size="2x" icon={faFile} />
              <StyledTextA>Resume/CV</StyledTextA>
            </StyledLi>
          </StyledUl>
          <StyledTopLine />
          <StyledIconContainer>
            <AButton
              contactPage={true}
              href={"https://github.com/adampagels"}
              icon={faGithubAlt}
            ></AButton>
            <AButton
              contactPage={true}
              href={"https://www.linkedin.com/in/adampagels/"}
              icon={faLinkedinIn}
            ></AButton>
            <AButton
              contactPage={true}
              href={"https://angel.co/u/adampagels"}
              icon={faAngellist}
            ></AButton>
          </StyledIconContainer>
          <StyledBottomLine />
        </StyledContactInfo>
      </StyledContainer>
    </Layout>
  )
}

export default Contact
