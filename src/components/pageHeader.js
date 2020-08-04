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
  color: #333;
  font-size: 50px;
  text-align: center;
  margin-top: 70px;
  animation: ${EnterAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;

  @media screen and (min-width: 475px) {
    font-size: 60px;
  }

  @media screen and (min-width: 830px) {
    margin-top: 40px;
  }
`

const pageHeader = props => <StyledH1>{props.heading}</StyledH1>

export default pageHeader
