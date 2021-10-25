import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MembersCard from "./MembersCard";


const MembersList = (props) => {
  const inputEl = useRef("");
  const deleteMemberHandler = (id) => {
    props.getMemberId(id);
  };

  const renderMemberList = props.members.map((member) => {
    return (
      <MembersCard
        member={member}
        clickHander={deleteMemberHandler}
        key={member.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="ui container">
      <div className="page-heading"> <h1>Members List</h1>
      </div>

      <h2 style={{color:"white"}}>
        <font>FINZ Members</font>
        <Link to="/add">
          <button className="ui button blue right">Join Membership</button>
        </Link>
      </h2>

      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Members"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderMemberList.length > 0
          ? renderMemberList
          : "No members available"}
      </div>
    </div>
  );
};

export default MembersList;
