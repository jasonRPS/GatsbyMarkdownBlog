import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} style={{ scrollBehavior: "smooth" }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body style={{ margin: "0" }} {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
          type="text/javascript"
          src="//www.radiojar.com/wrappers/api-plugins/v1/radiojar-min.js"
        ></script>
        <script>
          {`rjq('#rjp-radiojar-player').radiojar('player', {
  "streamName": "uf6x8w5f81ac",
  "enableUpdates": true,
  "defaultImage": "//www.radiojar.com/img/sample_images/Radio_Stations_Avatar_BLUE.png",
  "autoplay":false
 });
 rjq('#rjp-radiojar-player').off('rj-track-load-event');
 rjq('#rjp-radiojar-player').on('rj-track-load-event', function(event, data) {
   updateInfo(data);
   if (data.title != "" || data.artist != "") {
     rjq('.rjp-trackinfo-container').show();
     rjq('#trackInfo').html(data.artist + ' - "' + data.title + '"')
   } else {
     rjq('.rjp-trackinfo-container').hide();
   }
 });

 function updateInfo(data) {
   if (data.thumb) {
     rjq('#rj-cover').html('<a href="#"><img src="' + data.thumb + '" alt="" title="" /></a>')
   } else {
     rjq('#rj-cover').html('')
   }
 }`}
        </script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
