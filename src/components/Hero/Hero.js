import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import HeroStyles from "./hero.module.scss"

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "bathwebp.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={`${HeroStyles.hero}`}>
      <div className={HeroStyles.heroOverlay}>
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          alt="Bathroom Mirrors"
        />
      </div>
    </div>
  )
}

export default Hero
