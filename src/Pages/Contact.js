

import { Fragment, useEffect } from "react";
import { ContactForm } from '../Components/ContactForm';

function Contact() {

  useEffect(() => {
     document.title = "twitch filer | contact";  
   });

  return(
    <Fragment>
      <ContactForm />
    </Fragment>
  );
}


export default Contact;
