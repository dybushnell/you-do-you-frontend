import React from "react";
import CreateProfileForm from "../components/CreateProfileForm";

class ProfileContainer extends React.Component {
  // state = {
  //   first_name: "",
  //   email: "",
  //   birthdate: "",
  //   location: "",
  //   relationship_goal: "",
  //   blood_type: "",
  //   image_url: ""
  // };

  render() {
    return (
      <div className="profile-container">
        <CreateProfileForm />
      </div>
    );
  }
}

export default ProfileContainer;
