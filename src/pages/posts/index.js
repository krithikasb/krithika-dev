import React from "react"
import { Link, navigate, graphql } from "gatsby"
import Markdown from "markdown-to-jsx"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

class PostIndex extends React.Component {
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
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <small>{node.frontmatter.date}</small>
              <Markdown options={{ wrapper: "p", forceWrapper: true }}>
                {node.frontmatter.description || node.excerpt}
              </Markdown>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default PostIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "professional" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
          }
        }
      }
    }
  }
`
