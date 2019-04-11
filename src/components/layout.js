/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
        trans: file(relativePath: { eq: "Logo_Stamp_Semi_Transparent.png" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} image={data.trans.childImageSharp.fluid} />
        <div className="page">
          <main>{children}</main>
        </div>
        <footer>
          <div className="footer-div">
            <span>© {new Date().getFullYear()} Verdascape LLC</span>
            <span>Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a></span>
          </div>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
