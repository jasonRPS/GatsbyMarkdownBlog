import React from "react"
import styled from "styled-components"

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

import { FacebookIcon, TwitterIcon, LinkedinIcon, EmailIcon } from "react-share"

const StyledSocialShare = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
  justify-content: space-between;
  font-family: "Titillium Web", sans-serif;
  /* align-items: center; */
  color: lightgray;
  margin: 1rem 0;
  h2 {
    margin-top: 0;
  }
`

const SocialShare = props => {
  return (
    <StyledSocialShare>
      <h2>SHARE THIS</h2>
      <TwitterShareButton
        url={props.pageUrl}
        title={props.pageTitle}
        children="click here"
      >
        <TwitterIcon size={32} round="yes" />
      </TwitterShareButton>

      <FacebookShareButton url={props.pageUrl} title={props.pageTitle}>
        <FacebookIcon size={32} round="yes" />
      </FacebookShareButton>
      <LinkedinShareButton
        url={props.pageUrl}
        title={props.pageTitle}
        source="Geek Life Development"
      >
        <LinkedinIcon size={32} round="yes" />
      </LinkedinShareButton>
      <EmailShareButton url={props.pageUrl} title={props.pageTitle}>
        <EmailIcon size={32} round="yes" />
      </EmailShareButton>
    </StyledSocialShare>
  )
}

export default SocialShare
