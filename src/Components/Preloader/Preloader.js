import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function Preloader(props) {
  return <div id={props.load ? 'preloader' : 'preloader-none'}></div>;
}

export default Preloader;
