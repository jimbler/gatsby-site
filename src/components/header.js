import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'


const Header = ({ siteTitle, menuLinks, image}) => (
  <header>
    <div className="header-div">
    <div className="header-image">
      <Img fluid={image} />
    </div>
        <nav className="nav-bar">
        {
          menuLinks.map(link =>
            <button className="nav-item" key={link.name} style={{ 'listStyleType': 'none' }}>
              <Link to={link.link}>{link.name}</Link>
            </button>)
        }
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const pageQuery = graphql`
  query {
    trans: file(relativePath: { eq: "Logo_Stamp_Semi_Transparent.png" }) {
      ...fluidImage
    }
  }
`;
