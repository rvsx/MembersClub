import React from "react";
import SimpleMap from "./SimpleMap";

const Contact = () => {
  return (
<div className="ui main">
  <div id="col-1">
    <h1>Get in touch</h1>
    <font>Send us a message using the the form below and we'll aim to get back to you within 24 hours.</font>

    <form className="ui form" style={{marginTop:"15px"}}>
        <div className="field">
          <input
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>

        <div class="field">
          <label style={{color:"white"}}>Comment</label>
          <textarea></textarea>
        </div>
      </form>

      <div className="ui submit button blue" style={{marginTop:"15px"}}>Send</div>


  </div>
  
  <div id="col-2">
    <div style={{width: '100%', height: '400px'}}>
      <SimpleMap/>
    </div>
  </div>
</div>

  );
}

export default Contact;
