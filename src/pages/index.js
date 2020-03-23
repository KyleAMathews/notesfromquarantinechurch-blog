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
      <Styled.p sx={{ mb: 4 }}>
        On March 10,{" "}
        <a href="https://newsroom.churchofjesuschrist.org/article/gatherings-worldwide-temporarily-suspended">
          President Nelson took the unprecedented step of suspending all church
          meetings world-wide
        </a>{" "}
        impacting millions of members. A few of us decided to write our gospel
        study notes from our home church studies.
      </Styled.p>

      <Styled.h2>Posts</Styled.h2>
      <div sx={{ mb: 4 }}>
        {data.allDatoCmsBlogPost.nodes.map(post => (
          <div sx={{ mb: 4 }}>
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
    allDatoCmsBlogPost(sort: { fields: meta___createdAt, order: DESC }) {
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
