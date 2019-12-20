import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/Head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div>
      <Layout>
        <Head title="blog" />
        <h1>Blog Page</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <Link to={`/blog/${edge.node.slug}`}>
                <li className={blogStyles.post}>
                  {/* <img
                      src={
                        edge.node.frontmatter.featuredImage.childImageSharp
                          .fluid.src
                      }
                    /> */}
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                  {/* <p>{edge.node.frontmatter.date}</p>
                    <p>Reading time {edge.node.timeToRead} minutes</p> */}
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
