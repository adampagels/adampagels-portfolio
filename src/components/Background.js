import React from "react"
import backgroundImage from "../images/backgroundImage.svg"
import styled from "styled-components"

const StyledBackground = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 150%;
  width: 95%;
  max-width: 1200px;
  height: 50%;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin: 0 auto;
  border: 1px solid;
  border-bottom: 0px;

  @media (min-width: 700px) {
    background-size: 100%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`

const Background = () => {
  return (
    <div>
      <StyledBackground />
    </div>
  )
}

export default Background
