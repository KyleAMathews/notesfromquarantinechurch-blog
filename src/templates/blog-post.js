/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Styled, jsx, ThemeProvider, useThemeUI } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => {
  const context = useThemeUI()
  return (
    <Layout>
      <Helmet>
        <title>{data.datoCmsBlogPost.title}</title>
        <meta
          name="description"
          content={data.datoCmsBlogPost.bodyNode.childMdx.export}
        />
      </Helmet>
      <article>
        <Styled.h1 sx={{ mb: 2 }}>{data.datoCmsBlogPost.title}</Styled.h1>
        <Styled.p
          sx={{
            fontStyle: `italic`,
            fontSize: 0,
            mt: 0,
            mb: 3,
          }}
        >
          {data.datoCmsBlogPost.meta.createdAt} — by{" "}
          {data.datoCmsBlogPost.author}
        </Styled.p>
        <ThemeProvider theme={context.theme}>
          <MDXRenderer
            sx={{
              "li > p": {
                margin: 0,
              },
            }}
          >
            {data.datoCmsBlogPost.bodyNode.childMdx.body}
          </MDXRenderer>
        </ThemeProvider>
      </article>
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
        childMdx {
          body
          excerpt
        }
      }
    }
  }
`
