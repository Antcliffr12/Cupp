import React from "react"
import PropTypes from "prop-types"
import NavStyles from "./navbar.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Navbar = ({ siteTitle }) => {
  return (
    <nav
      className={`${NavStyles.nav} navbar navbar-expand-md navbar-dark bg-dark`}
    >
      <div className="container">
        <div className={NavStyles.brand}>
          <h1 className={NavStyles.brand_name}>
            <a href="./">
              Cupp My
              <span className="cl-primary"> Plumber</span>
            </a>
          </h1>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className={`${NavStyles.menu} navbar-nav ml-auto`}>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a class={`${NavStyles.button} btn`} href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}
export default Navbar
