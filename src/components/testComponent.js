import React, { useEffect } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const StyledThing = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid black;
`

const testComponent = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="//www.radiojar.com/wrappers/api-plugins/v1/css/player.css"
        ></link>
      </Helmet>
      <StyledThing>
        <div style={{ width: "100%" }} id="rj-player">
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
      </StyledThing>
    </>
  )
}
export default testComponent
