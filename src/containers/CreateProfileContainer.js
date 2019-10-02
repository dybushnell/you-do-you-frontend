import React from "react";
import CreateProfileForm from "../components/CreateProfileForm";

class CreateProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <h2>Create your profile</h2>
        {/* <br /> */}
        <CreateProfileForm
          passLogin={this.props.passLogin}
          allUsers={this.props.allUsers}
        />
      </div>
    );
  }
}

export default CreateProfileContainer;
