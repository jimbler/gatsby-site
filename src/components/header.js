import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div className="header-div">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="nav-bar">
      {
        menuLinks.map(link =>
          <li className="nav-item" key={link.name} style={{ 'listStyleType': 'none' }}>
            <Link to={link.link}>{link.name}</Link>
          </li>)
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
