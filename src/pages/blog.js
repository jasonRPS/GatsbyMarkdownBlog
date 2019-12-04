import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div>
      <Layout>
        <h1>Blog Page</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.slice(0, 3).map(edge => {
            return (
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <li className={blogStyles.post}>
                  <img
                    src={
                      edge.node.frontmatter.featuredImage.childImageSharp.fluid
                        .src
                    }
                  />
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </li>
              </Link>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
