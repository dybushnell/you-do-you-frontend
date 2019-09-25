import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="welcome-container">
        <WelcomeComponent
          passLogin={this.props.passLogin}
          allUsers={this.props.allUsers}
          passLocation={this.props.passLocation}
        />
      </div>
    );
  }
}
export default WelcomeContainer;
