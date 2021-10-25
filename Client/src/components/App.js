import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid"
import api from "../api/Members";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import AddMember from "./pages/AddMember";
import MembersList from "./pages/MembersList";
import MemberDetails from "./pages/MemberDetails";
import EditMember from "./pages/EditMember";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const retrieveMembers = async () => {
    const response = await api.get("/members");
    return response.data;
  };

  const addMemberHandler = async (member) => {
    const request = {
      id: uuid_v4(),
      ...member,
    };

    const response = await api.post("/members", request);
    setMembers([...members, response.data]);
  };

  const updateMemberHandler = async (member) => {
    const response = await api.put(`/members/${member.id}`, member);
    const { id } = response.data;
    setMembers(
      members.map((member) => {
        return member.id === id ? { ...response.data } : member;
      })
    );
  };

  const removeMemberHandler = async (id) => {
    await api.delete(`/members/${id}`);
    const newMemberList = members.filter((member) => {
      return member.id !== id;
    });

    setMembers(newMemberList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newMemberList = members.filter((member) => {
        return Object.values(member)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newMemberList);
    } else {
      setSearchResults(members);
    }
  };

  useEffect(() => {
    const getAllMembers = async () => {
      const allMembers = await retrieveMembers();
      if (allMembers) setMembers(allMembers);
    };

    getAllMembers();
  }, []);


  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/add"
            render={(props) => (
              <AddMember {...props} addMemberHandler={addMemberHandler} />
            )}
          />
          <Route
            path="/list"
            exact
            render={(props) => (
              <MembersList
                {...props}
                members={searchTerm.length < 1 ? members : searchResults}
                getMemberId={removeMemberHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/edit"
            exact
            render={(props) => (
              <EditMember
                {...props}
                updateMemberHandler={updateMemberHandler}
              />
            )}
          />

          <Route path="/member/:id" component={MemberDetails} />

          <Route path="/contact" component={Contact}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;