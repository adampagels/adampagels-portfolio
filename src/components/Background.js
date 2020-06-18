import React from "react"
import backgroundImage from "../images/backgroundImage.svg"

const Background = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          maxWidth: "1200px",
          height: "60%",
          position: "fixed",
          bottom: "0px",
          right: "0px",
          left: "0px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  )
}

export default Background
