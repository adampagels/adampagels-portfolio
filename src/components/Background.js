import React from "react"
import backgroundImage from "../images/backgroundImage.svg"

const Background = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: '100%',
          width: "100%",
          maxWidth: "1200px",
          height: "50%",
          position: "fixed",
          bottom: "0px",
          right: "0px",
          left: "0px",
          margin: "0 auto",
          border: '1px solid',
          borderBottom: '0px'
        }}
      ></div>
    </div>
  )
}

export default Background
