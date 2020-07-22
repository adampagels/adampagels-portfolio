import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/Navigation"
import "./Layout.css"
//Prevent FontAwesome icons from initially loading large
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({ children }) => {
  useEffect(() => {
    document.body.addEventListener("mousedown", () => {
      document.body.classList.add("using-mouse")
    })

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === 9) {
        document.body.classList.remove("using-mouse")
      }
    })
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `auto`,
          maxWidth: "1200px",
          padding: `1rem 1.0875rem 1.45rem`,
        }}
      >
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
