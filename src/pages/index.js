import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/Background"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        color: "black",
        fontSize: 80,
        textAlign: "center",
        paddingRight: 0,
      }}
    >
      Adam Pagels
    </h1>
    <div style={{ marginTop: "-40px" }}>
      <h2
        style={{
          color: "black",
          fontSize: 25,
          marginLeft: "50%",
          paddingRight: 0,
        }}
      >
        Full-Stack Developer
      </h2>
      <h2
        style={{
          color: "black",
          fontSize: 25,
          marginLeft: "50%",
          paddingRight: 0,
        }}
      >
        Based in Toronto
      </h2>
    </div>
    <BackgroundImage />
  </Layout>
)

export default Index
