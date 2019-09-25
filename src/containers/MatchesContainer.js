import React from "react";
import ProfileComponent from "../components/ProfileComponent";

class MatchesContainer extends React.Component {
  render() {
    let matchComponents = this.props.allUsers.map(match => (
      <ProfileComponent
        key={match.email}
        // clickHandler={this.props.clickHandler}
        first_name={match.first_name}
        email={match.email}
        birthdate={match.birthdate}
        location={match.location}
        relationship_goal={match.relationship_goal}
        blood_type={match.blood_type}
        image_url={match.image_url}
      />
    ));
    return (
      <div>
        <div className="matches-container">
          <ProfileComponent
            allUsers={this.props.allUsers}
            first_name={this.props.first_name}
            email={this.props.email}
            birthdate={this.props.birthdate}
            location={this.props.location}
            relationship_goal={this.props.relationship_goal}
            blood_type={this.props.blood_type}
            image_url={this.props.image_url}
          />
          {matchComponents}
        </div>
      </div>
    );
  }
}

export default MatchesContainer;
