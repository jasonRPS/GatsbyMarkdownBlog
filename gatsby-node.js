const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const podTemplate = path.resolve("./src/templates/pod.js")
  const podRes = await graphql(`
    query {
      allContentfulTestUrl {
        edges {
          node {
            slug
            feed
            title
          }
        }
      }
    }
  `)
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const blogRes = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  podRes.data.allContentfulTestUrl.edges.forEach(edge => {
    createPage({
      component: podTemplate,
      path: `/pod/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  blogRes.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   const res = await graphql(`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   res.data.allContentfulBlogPost.edges.forEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.slug}`,
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }
