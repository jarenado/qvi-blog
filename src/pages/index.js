import * as React from "react"
import { Link, graphql, navigate } from "gatsby"

import Bio from "../components/bio"
import Nav from "../components/nav"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Nav />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const tags = post.frontmatter.tags

          if (post.frontmatter.publish === "false") {
            return false
          }

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <p itemProp="headline">{title}</p>
                        <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData} />
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <div>
                  Tags:
                  {tags.map((tag) => {
                    return [
                      <div className="tagLink"
                        key={tag}
                        onClick={event => { navigate(`/tag/${tag}`) }}
                      >
                        {tag}, &nbsp;
                      </div>
                    ]
                  })}
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          tags
          date(formatString: "MMMM DD, YYYY")
          title
          description
          publish
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
