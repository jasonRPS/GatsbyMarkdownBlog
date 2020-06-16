import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { BlogCardStyles, BlogCardContainer } from "./styles/BlogCardStyles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogCard = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            excerpt
            publishedDate(formatString: "MMMM Do, YYYY")
            featuredImage {
              fixed {
                width
                src
              }
            }
            body {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <BlogCardContainer>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`/blog/${edge.node.slug}`}
          >
            <BlogCardStyles>
              <div className="blog-container">
                <div className="img-container">
                  <img src={edge.node.featuredImage.fixed.src} />
                </div>
                <h2>{edge.node.title}</h2>
                <p className="published-date">{edge.node.publishedDate}</p>
                <p
                  style={{ fontSize: "1em", padding: ".3rem", color: "black" }}
                >
                  {edge.node.excerpt}
                </p>
                <button>Learn More</button>
              </div>
            </BlogCardStyles>
          </Link>
        )
      })}
    </BlogCardContainer>
  )
}

export default BlogCard
