import React from "react";

class AddMember extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addMemberHandler(this.state);
    this.setState({ firstName: "", lastName:"", email: "" });
    this.props.history.push("/list");
  };
  render() {
    return (
      <div className="ui container">
        <div className="page-heading"> <h1>Join Membership</h1> </div>
        <div className="ui inverted segment">
        <div className="ui inverted form">
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input placeholder="First Name" 
              type="text"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input placeholder="Last Name" 
              type="text"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="field">
              <label>Email</label>
              <input placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              />
          </div>

          <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0"/>
              <label>I agree to the terms and conditions</label>
            </div>
          </div>
          <div className="ui submit button blue" onClick={this.add}>Submit</div>
        </div>
      </div>
      </div>
    );
  }
}

export default AddMember;
