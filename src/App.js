import React from "react";
// import { Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeContainer from "./containers/WelcomeContainer";
import CreateProfileContainer from "./containers/CreateProfileContainer";
import MatchesContainer from "./containers/MatchesContainer";
// import MessagesContainer from "./containers/MessagesContainer";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    allUsers: [],
    user: [],
    location: "welcome"
  };

  componentDidMount() {
    this.doTheFetch();
  }

  doTheFetch = () => {
    fetch("http://localhost:4000/api/v1/users")
      .then(resp => resp.json())
      .then(data => this.setState({ allUsers: data }));
  };

  passLocation = () => {
    this.setState({ location: "createProfile" });
  };

  passLogin = data => {
    console.log("user data: ", data);

    this.setState({ user: data });
    // debugger;
    this.setState({ location: "matches" });
  };

  render() {
    if (this.state.location === "welcome") {
      return (
        <div>
          <Header />
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
          <Header />
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
          <Header />
          <CreateProfileContainer passLogin={this.passLogin} />
        </div>
      );
    }
  }
}

export default App;
