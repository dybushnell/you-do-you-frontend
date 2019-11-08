import React from "react";
import WelcomeContainer from "./containers/WelcomeContainer";
import CreateProfileContainer from "./containers/CreateProfileContainer";
import MatchesContainer from "./containers/MatchesContainer";
import MessagesContainer from "./containers/MessagesContainer";
import HeaderContainer from "./containers/HeaderContainer";
import "./App.css";

class App extends React.Component {
  state = {
    allUsers: [],
    user: [],
    location: "welcome"
  };

  componentDidMount() {
    this.allUsersFetch();
  }

  allUsersFetch = () => {
    fetch("http://localhost:4000/api/v1/users")
      .then(resp => resp.json())
      .then(data => this.setState({ allUsers: data }));
  };

  passLocation = () => {
    this.setState({ location: "createProfile" });
  };

  passLogin = data => {
    this.setState({ user: data });
    this.setState({ location: "matches" });
  };

  switchToMatches = () => {
    this.setState({ location: "matches" });
  };

  switchToMessages = () => {
    this.setState({ location: "messages" });
  };

  switchToWelcome = () => {
    this.setState({ location: "welcome" });
  };

  render = () => {
    if (this.state.location === "welcome") {
      return (
        <div>
          <HeaderContainer location={this.state.location} />
          <WelcomeContainer
            allUsers={this.state.allUsers}
            passLogin={this.passLogin}
            passLocation={this.passLocation}
          />
        </div>
      );
    } else if (this.state.location === "matches") {
      return (
        <div>
          <HeaderContainer
            location={this.state.location}
            switchToMatches={this.switchToMatches}
            switchToMessages={this.switchToMessages}
            switchToWelcome={this.switchToWelcome}
          />
          <MatchesContainer
            allUsers={this.state.allUsers}
            first_name={this.state.user[0].first_name}
            email={this.state.user[0].email}
            birthdate={this.state.user[0].birthdate}
            location={this.state.user[0].location}
            relationship_goal={this.state.user[0].relationship_goal}
            blood_type={this.state.user[0].blood_type}
            image_url={this.state.user[0].image_url}
          />
        </div>
      );
    } else if (this.state.location === "createProfile") {
      return (
        <div>
          <HeaderContainer
            location={this.state.location}
            switchToMatches={this.switchToMatches}
            switchToMessages={this.switchToMessages}
            switchToWelcome={this.switchToWelcome}
          />
          <CreateProfileContainer
            passLogin={this.passLogin}
            allUsers={this.state.allUsers}
          />
        </div>
      );
    } else if (this.state.location === "messages") {
      return (
        <div>
          <HeaderContainer
            location={this.state.location}
            switchToMatches={this.switchToMatches}
            switchToMessages={this.switchToMessages}
            switchToWelcome={this.switchToWelcome}
          />
          <MessagesContainer
            passLogin={this.passLogin}
            allUsers={this.state.allUsers}
            first_name={this.state.user[0].first_name}
            email={this.state.user[0].email}
            birthdate={this.state.user[0].birthdate}
            location={this.state.user[0].location}
            relationship_goal={this.state.user[0].relationship_goal}
            blood_type={this.state.user[0].blood_type}
            image_url={this.state.user[0].image_url}
          />
        </div>
      );
    }
  };
}

export default App;
