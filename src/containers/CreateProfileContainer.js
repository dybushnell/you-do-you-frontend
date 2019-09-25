import React from "react";
import CreateProfileForm from "../components/CreateProfileForm";

class CreateProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <CreateProfileForm passLogin={this.props.passLogin} />
      </div>
    );
  }
}

export default CreateProfileContainer;
