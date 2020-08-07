import React from "react"
import styled, { keyframes } from "styled-components"

const EnterAnimation = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const StyledH1 = styled.h1`
  opacity: 0;
  color: #333;
  font-size: ${props => (props.projectTemplate ? "60px" : "50px")};
  text-align: ${props => (props.projectTemplate ? "left" : "center")};
  margin-top: 70px;
  animation: ${EnterAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;

  @media screen and (min-width: 475px) {
    font-size: 60px;
  }

  @media screen and (min-width: 830px) {
    margin-top: 40px;
  }
`

const pageHeader = props => (
  <StyledH1 projectTemplate={props.projectTemplate}>{props.heading}</StyledH1>
)

export default pageHeader
