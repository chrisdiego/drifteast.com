import React from 'react';

//import './event.css';

const GMapsStreetView = (props) => (
    <div>
      <iframe width="100%" height="300" frameborder="0" src={"https://www.google.com/maps/embed/v1/search?key=AIzaSyCtPTuQcbRhr_OcKVgkXGXTiV1ts18zqB0&q=" + props.location +""} allowFullScreen></iframe>
    </div>
)

export default GMapsStreetView;
