import React from "react";

class ProfileComponent extends React.Component {
  render() {
    // debugger;
    return (
      <div>
        <br />
        first_name = {this.props.first_name}
        <br />
        email = {this.props.email}
        <br />
        birthdate = {this.props.birthdate}
        <br />
        location = {this.props.location}
        <br />
        relationship_goal = {this.props.relationship_goal}
        <br />
        blood_type = {this.props.blood_type}
        <br />
        image_url = {this.props.image_url}
        <br />
      </div>
    );
  }
}

export default ProfileComponent;
