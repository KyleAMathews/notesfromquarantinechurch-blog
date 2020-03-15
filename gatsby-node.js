const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDatoCmsBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  result.data.allDatoCmsBlogPost.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })
}
