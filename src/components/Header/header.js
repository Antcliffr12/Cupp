import PropTypes from "prop-types"
import React from "react"
import TopBar from "../TopBar/topbar"
import NavBar from "../NavBar/navbar"
import { useStaticQuery, graphql } from "gatsby"
import HeaderStyle from "./header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <TopBar />
      <NavBar siteTitle={data.site.siteMetadata.title} />
    </header>
  )
}

export default Header
