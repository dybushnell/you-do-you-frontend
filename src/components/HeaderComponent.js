import React from "react";

class HeaderComponent extends React.Component {
  render() {
    if (this.props.location === "welcome") {
      return (
        <div className="header">
          <div className="header-title">
            <h1>You Do You</h1>
          </div>
        </div>
      );
    } else if (this.props.location === "createProfile") {
      return (
        <div className="header">
          <div className="header-title">
            <h1>You Do You</h1>
          </div>
          <div className="header-shit">
            <div> </div>
            <br />
            <div> </div>
            <br />
            <div onClick={this.props.switchToWelcome}>Logout</div>
            <br />
          </div>
        </div>
      );
    } else if (this.props.location === "matches") {
      return (
        <div className="header">
          <div className="header-title">
            <h1>You Do You</h1>
          </div>
          <div className="header-shit">
            <div> </div>
            <br />
            <div onClick={this.props.switchToMessages}>Messages</div>
            <br />
            <div onClick={this.props.switchToWelcome}>Logout</div>
            <br />
          </div>
        </div>
      );
    } else if (this.props.location === "messages") {
      return (
        <div className="header">
          <div className="header-title">
            <h1>You Do You</h1>
          </div>
          <div className="header-shit">
            <br />
            <div onClick={this.props.switchToMatches}> Matches</div>
            <br />
            <div onClick={this.props.switchToWelcome}>Logout</div>
            <br />
          </div>
        </div>
      );
    }
  }
}

export default HeaderComponent;
