import React from "react";
import HeaderComponent from "../components/HeaderComponent";

class HeaderContainer extends React.Component {
  render() {
    return (
      <HeaderComponent
        location={this.props.location}
        switchToMatches={this.props.switchToMatches}
        switchToMessages={this.props.switchToMessages}
        switchToWelcome={this.props.switchToWelcome}
      />
    );
  }
}

export default HeaderContainer;
