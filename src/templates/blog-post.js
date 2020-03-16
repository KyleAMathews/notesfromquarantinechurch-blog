/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { Styled, jsx } from "theme-ui"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      <div>
        <Styled.h1>{data.datoCmsBlogPost.title}</Styled.h1>
        <Styled.p
          sx={{
            fontStyle: `italic`,
            fontSize: 0,
            mt: 0,
            mb: 1,
          }}
        >
          {data.datoCmsBlogPost.meta.createdAt} — by{" "}
          {data.datoCmsBlogPost.author}
        </Styled.p>
        <Styled.div
          sx={{
            "li > p": {
              margin: 0,
            },
          }}
          dangerouslySetInnerHTML={{
            __html: data.datoCmsBlogPost.bodyNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogpost($id: String!) {
    datoCmsBlogPost(id: { eq: $id }) {
      title
      meta {
        createdAt(formatString: "YYYY-MM-DD")
      }
      author
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
