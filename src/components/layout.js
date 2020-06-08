/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "normalize.css"
import "typeface-montserrat"
import "typeface-arvo"
import { Global } from "@emotion/core"

import Header from "./header"

const Layout = ({ children }) => {
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
    <Styled.root>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Global
        styles={theme => ({
          "*": {
            boxSizing: "border-box",
          },
          li: {
            "& > p": {
              marginBottom: theme.space[2],
              marginTop: 0,
            },
          },
        })}
      />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 600,
          padding: 3,
          paddingTop: 0,
        }}
      >
        <Helmet titleTemplate="%s | Dispatches from the Quarantine Church">
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <main>{children}</main>
        <Styled.hr />
        <footer>
          <Styled.p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Styled.p>
        </footer>
      </div>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
