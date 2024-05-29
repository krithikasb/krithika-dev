/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="bio">
            <StaticImage
              // fixed={data.avatar.childImageSharp.gatsbyImageData}
              src="../../content/assets/profile-pic.jpg"
              width={50}
              height={50}
              alt={author}
              className="bio-avatar"
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              I'm <strong>{author}</strong>, a Software Engineer who loves
              Javascript! I'm all about creative coding with random prompts —
              it's a fun way to spark fresh ideas and pick up new stuff. I'm
              convinced that this kind of playful, spontaneous coding is a great
              way to keep in touch with programming outside of work.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
