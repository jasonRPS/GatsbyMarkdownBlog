import React, { useEffect } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { TestStyleSheet } from "../components/styles/testStyleSheet"
import "../components/styles/testCheese.css"

const StyledThing = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-top: 100px;
  background-color: gray;
  border: 2px solid black;

  #rj-cover {
    width: 150px;
    height: 150px;
    background-color: blue;
  }
`

const testComponent = () => {
  return (
    <>
      <Helmet>
        {/* <link
          rel="stylesheet"
          href="//www.radiojar.com/wrappers/api-plugins/v1/css/player.css"
        ></link> */}
      </Helmet>

      {/* <TestStyleSheet> */}
      <div id="rj-player">
        <div class="player-v3 player-medium">
          <div id="rj-cover">
            <a href="#">
              <img src="" />
            </a>
          </div>
          <div class="info">
            <div class="rjp-trackinfo-container">
              <h4 class="rjp-label">Now playing:</h4>
              <p id="trackInfo" class="rjp-info"></p>
            </div>
            <div class="rjp-player-container">
              <div id="rjp-radiojar-player"></div>
              <div id="rj-player-controls" class="rj-player-controls">
                <div class="jp-gui jp-interface">
                  <div class="jp-controls">
                    <a
                      href="javascript:;"
                      style={{ display: "block" }}
                      class="jp-play"
                      title="Play"
                    >
                      &nbsp;<i class="icon-play"></i>
                    </a>
                    <a
                      href="javascript:;"
                      style={{ display: "none" }}
                      class="jp-pause"
                      title="Pause"
                    >
                      <i class="icon-pause"></i>
                    </a>
                    <a
                      href="javascript:;"
                      style={{ display: "block" }}
                      class="jp-mute"
                      title="Mute"
                    >
                      <i class="icon-volume-up"></i>
                    </a>
                    <a
                      href="javascript:;"
                      style={{ display: "none" }}
                      class="jp-unmute"
                      title="Unmute"
                    >
                      <i class="icon-volume-off"></i>
                    </a>
                    <div class="jp-volume-bar-wrapper">
                      <div class="jp-volume-bar">
                        <div class="jp-volume-bar-value"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jp-no-solution">
                <span>Update Required</span>
                To play the media you will need to either update your browser to
                a recent version or update your{" "}
                <a href="//get.adobe.com/flashplayer/" target="_blank">
                  Flash plugin
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </TestStyleSheet> */}
      {/* <StyledThing>
        <div id="rj-player">
          <div class="player-v3 player-medium">
            <div id="rj-cover">
              <a href="#">
                <img src="" />
              </a>
            </div>
            <div class="info">
              <div class="rjp-trackinfo-container">
                <h4 class="rjp-label">Now playing:</h4>
                <p id="trackInfo" class="rjp-info"></p>
              </div>
              <div class="rjp-player-container">
                <div id="rjp-radiojar-player"></div>
                <div id="rj-player-controls" class="rj-player-controls">
                  <div class="jp-gui jp-interface">
                    <div class="jp-controls">
                      <a
                        href="javascript:;"
                        style={{ display: "block" }}
                        class="jp-play"
                        title="Play"
                      >
                        &nbsp;<i class="icon-play"></i>
                      </a>
                      <a
                        href="javascript:;"
                        style={{ display: "none" }}
                        class="jp-pause"
                        title="Pause"
                      >
                        <i class="icon-pause"></i>
                      </a>
                      <a
                        href="javascript:;"
                        style={{ display: "block" }}
                        class="jp-mute"
                        title="Mute"
                      >
                        <i class="icon-volume-up"></i>
                      </a>
                      <a
                        href="javascript:;"
                        style={{ display: "none" }}
                        class="jp-unmute"
                        title="Unmute"
                      >
                        <i class="icon-volume-off"></i>
                      </a>
                      <div class="jp-volume-bar-wrapper">
                        <div class="jp-volume-bar">
                          <div class="jp-volume-bar-value"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jp-no-solution">
                  <span>Update Required</span>
                  To play the media you will need to either update your browser
                  to a recent version or update your{" "}
                  <a href="//get.adobe.com/flashplayer/" target="_blank">
                    Flash plugin
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
        <audio controls>
          <source src="http://stream.radiojar.com/4qe8m62pa8zuv" />
        </audio>
      </StyledThing> */}
    </>
  )
}
export default testComponent
