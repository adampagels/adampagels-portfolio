import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      src="../images/adam-pagels-developer.png"
      loading="lazy"
      quality={100}
    />
  )
}

export default Image
