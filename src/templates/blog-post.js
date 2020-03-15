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
        <Styled.h1>{data.markdownRemark.frontmatter.title}</Styled.h1>
        <Styled.p
          sx={{
            fontStyle: `italic`,
            fontSize: 0,
            mt: 0,
            mb: 1,
          }}
        >
          {data.markdownRemark.frontmatter.date} — by{" "}
          {data.markdownRemark.frontmatter.author}
        </Styled.p>
        <Styled.div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogpost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
      }
      html
    }
  }
`
