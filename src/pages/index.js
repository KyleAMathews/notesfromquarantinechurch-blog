/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { Styled, jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.p>
        On March 10, President Nelson took the unprecedented step of stopping
        all church meeting world-wide impacting millions of members. This is
        some of our gospel study notes.
      </Styled.p>

      <Styled.h2>Posts</Styled.h2>
      <div sx={{ mb: 4 }}>
        {data.allDatoCmsBlogPost.nodes.map(post => (
          <div>
            <Link
              to={post.slug}
              sx={{ textDecoration: `inherit`, color: `inherit` }}
            >
              <Styled.h3>{post.title}</Styled.h3>
              <Styled.p
                sx={{
                  fontStyle: `italic`,
                  fontSize: 0,
                  mt: 0,
                  mb: 1,
                }}
              >
                {post.meta.createdAt} — by {post.author}
              </Styled.p>
              <Styled.p sx={{ mt: 1 }}>
                {post.bodyNode.childMarkdownRemark.excerpt}
              </Styled.p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allDatoCmsBlogPost {
      nodes {
        bodyNode {
          childMarkdownRemark {
            excerpt
          }
        }
        title
        slug
        author
        meta {
          createdAt(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
