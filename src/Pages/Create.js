
import { Fragment, useEffect } from "react";
import CreateForm from "../Components/CreateForm";

import '../static/createform.css';

function Create() {

  useEffect(() => {
     document.title = "twitch filer | create filter";  
   });


  return(
    <Fragment>
      <div class='large-text-centered'>
        <h1>Filter chat details </h1> 
      </div>
      <CreateForm />
    </Fragment>
 );
}


export default Create;
