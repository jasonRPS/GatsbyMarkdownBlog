import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/Head"
import styled from "styled-components"

const BlogStyles = styled.div`
  main {
    width: 80%;
    margin: auto;
    padding: 5rem 1rem;
  }
`

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const alt = node.data.target.fields.title["en-US"]
  //       const url = node.data.target.fields.file["en-US"].url
  //       return <img alt={alt} src={url} />
  //     },
  //   },
  // }
  return (
    <Layout>
      <>
        <Head title={props.data.contentfulBlogPost.title} />

        <BlogStyles>
          <main>
            <h1 style={{ margin: "0" }}>
              {props.data.contentfulBlogPost.title}
            </h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {/* {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )} */}
          </main>
        </BlogStyles>
      </>
    </Layout>
  )
}

export default Blog
