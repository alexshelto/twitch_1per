
import React, { useEffect, Fragment } from 'react'

import View_Chat from "../Components/View";

function View() {
  useEffect(() => {
     document.title = "twitch filer | view";  
   });
  return (
    <Fragment>
      {View_Chat}
    </Fragment>
 );
}


export default View;
