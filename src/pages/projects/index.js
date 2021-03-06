import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h2>
                <a href={node.frontmatter.link}>
                  {title}
                </a>
              </h2>
              {/* <small>{node.frontmatter.date}</small> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: node.html,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { categories: { eq: "project" } } }
      ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
            link
          }
        }
      }
    }
  }
`
