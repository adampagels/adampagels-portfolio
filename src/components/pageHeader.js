import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: #333;
  font-size: 50px;
  text-align: center;
  margin-top: 70px;

  @media screen and (min-width: 475px) {
    font-size: 60px;
  }

  @media screen and (min-width: 830px) {
    margin-top: 40px;
  }
`

const pageHeader = props => <StyledH1>{props.heading}</StyledH1>

export default pageHeader
