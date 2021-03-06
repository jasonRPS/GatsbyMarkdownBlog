import React from "react"
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script
      type="text/javascript"
      src="//www.radiojar.com/wrappers/api-plugins/v1/radiojar-min.js"
    ></script>,

    <script
      key="fun_javascript"
      dangerouslySetInnerHTML={{
        __html: `
        rjq('#rjp-radiojar-player').radiojar('player', {
            "streamName": "4qe8m62pa8zuv",
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
           }
      `,
      }}
    />,
  ])
}
