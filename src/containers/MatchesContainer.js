import React from "react";
import BigProfileComponent from "../components/BigProfileComponent";
import SmallProfileComponent from "../components/SmallProfileComponent";

class MatchesContainer extends React.Component {
  state = { allUsers: this.props.allUsers, match_criterion: "first_name" };

  postMessage = (recipient, message) => {
    fetch("http://localhost:4000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message_text: message,
        sender_id: this.props.email,
        recipient_id: recipient
      })
    });
  };

  changeHandler = e => {
    this.setState({ match_criterion: e.target.value });
  };

  render() {
    let nameUsers = this.props.allUsers.filter(
      user =>
        user.first_name === this.props.first_name &&
        user.email !== this.props.email
    );

    let bloodUsers = this.props.allUsers.filter(
      user =>
        user.blood_type === this.props.blood_type &&
        user.email !== this.props.email
    );

    let birthdateUsers = this.props.allUsers.filter(
      user =>
        user.birthdate === this.props.birthdate &&
        user.email !== this.props.email
    );

    let matchComponents = [];

    if (this.state.match_criterion === "first_name") {
      matchComponents = nameUsers.map(match => (
        <SmallProfileComponent
          key={match.email}
          first_name={match.first_name}
          email={match.email}
          birthdate={match.birthdate}
          location={match.location}
          relationship_goal={match.relationship_goal}
          blood_type={match.blood_type}
          image_url={match.image_url}
          postMessage={this.postMessage}
        />
      ));
    } else if (this.state.match_criterion === "birthdate") {
      matchComponents = birthdateUsers.map(match => (
        <SmallProfileComponent
          key={match.email}
          first_name={match.first_name}
          email={match.email}
          birthdate={match.birthdate}
          location={match.location}
          relationship_goal={match.relationship_goal}
          blood_type={match.blood_type}
          image_url={match.image_url}
          postMessage={this.postMessage}
        />
      ));
    } else if (this.state.match_criterion === "blood_type") {
      matchComponents = bloodUsers.map(match => (
        <SmallProfileComponent
          key={match.email}
          first_name={match.first_name}
          email={match.email}
          birthdate={match.birthdate}
          location={match.location}
          relationship_goal={match.relationship_goal}
          blood_type={match.blood_type}
          image_url={match.image_url}
          postMessage={this.postMessage}
        />
      ));
    }

    return (
      <div>
        <div className="matches-container">
          <div className="user-profile-big">
            <BigProfileComponent
              allUsers={this.props.allUsers}
              first_name={this.props.first_name}
              email={this.props.email}
              birthdate={this.props.birthdate}
              location={this.props.location}
              relationship_goal={this.props.relationship_goal}
              blood_type={this.props.blood_type}
              image_url={this.props.image_url}
            />
          </div>{" "}
          {/* end user-profile-big*/}
          <div className="search-and-results">
            <h2>Find a match!</h2>
            <div> Search by:</div>
            <br />
            <select
              className="search-input"
              placeholder="match_criteria"
              name="match_criteria"
              // value={this.state.match_criteria}
              onChange={this.changeHandler}
            >
              <option value="first_name">First Name</option>
              <option value="birthdate">Birthdate</option>
              <option value="blood_type">Blood Type</option>
            </select>
            <br />
            <br />
            {matchComponents}
          </div>
        </div>
      </div>
    );
  }
}

export default MatchesContainer;
