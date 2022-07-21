import React from "react"
import { Link, navigate, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  componentDidMount() {
    // navigate(`/projects`);
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <h1 id="projects">Projects</h1>
        {posts
          .filter(({ node }) => node.frontmatter.categories.includes("project"))
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2>
                  <a href={node.frontmatter.link} target="_blank">
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
        <h1 id="posts">Posts</h1>
        {posts
          .filter(({ node }) =>
            node.frontmatter.categories.includes("professional")
          )
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        <h1 id="videos">Videos</h1>
        {posts
          .filter(({ node }) => node.frontmatter.categories.includes("video"))
          .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h2>
                  {/* <a href={node.frontmatter.link} target="_blank"> */}
                  {title}
                  {/* </a> */}
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

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
