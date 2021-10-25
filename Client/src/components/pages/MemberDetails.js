import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const MemberDetails = (props) => {
  const { firstName, lastName, email } = props.location.state.member;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{firstName} {lastName}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/list">
          <button className="ui button blue center">
            Back to Members List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MemberDetails;
