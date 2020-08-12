import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledA = styled.a`
  color: ${props => (props.contactPage ? "#333" : "#fdfdfd")};
  background-color: ${props => (props.contactPage ? "#fdfdfd" : "#9e1e1e")};
  padding: ${props => (props.contactPage ? "20px" : "4px")};
  box-shadow: 0px 12px 11px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin: ${props => (props.contactPage ? "10px 10px" : "10px 0px 10px 10px")};
  border-radius: 50%;
  border: ${props =>
    props.contactPage ? "2px solid #fdfdfd" : "2px solid #9e1e1e"};
  &:hover {
    box-shadow: 0px 37px 20px -15px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px);
  }

  @media screen and (min-width: 355px) {
    padding: ${props => props.template && "10px"};
  }

  @media screen and (min-width: 475px) {
    padding: ${props => props.projectList && "10px"};
  }
`

const StyledFAIcon = styled(FontAwesomeIcon)`
  font-size: ${props => (props.contactPage ? "30px" : "22px")};
  padding: 5px;
`

const AButton = props => (
  <>
    <StyledA
      contactPage={props.contactPage}
      projectList={props.projectList}
      template={props.template}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledFAIcon contactPage={props.contactPage} icon={props.icon} />
    </StyledA>
  </>
)

export default AButton
