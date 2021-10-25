import React from "react";
import finz from "../images/finz.png";

function Home() {
  return (
  <div className="ui container">
  <div className="ui card centered" style={{marginTop:"50px"}}>
    <div className="image">
      <img src={finz} alt="finz" />
    </div>
  </div>
  <p style={{color:"white", fontSize:"30px"}}>
  We are on a mission to deliver an equitable, hyper-personalised and rewarding financial ecosystem for the mobile-first generation. 

We are a mobile money club offering flexible and customised payments subscription with membership benefits, gamified rewards and a next-gen marketplace built exclusively for premium brands.
  </p>
  </div>
  );
}

export default Home;
