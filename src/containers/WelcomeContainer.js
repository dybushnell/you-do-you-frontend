import React from "react";
import WelcomeComponent from "../components/WelcomeComponent";

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="welcome-container">
        <WelcomeComponent />
      </div>
    );
  }
}
export default WelcomeContainer;
