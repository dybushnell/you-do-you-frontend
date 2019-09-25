import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CreateProfileContainer from "./containers/CreateProfileContainer";
import MatchesContainer from "./containers/MatchesContainer";
// import MessagesContainer from "./containers/MessagesContainer";
import WelcomeContainer from "./containers/WelcomeContainer";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    allUsers: [],
    user: []
  };

  componentDidMount() {
    this.doTheFetch();
  }

  doTheFetch = () => {
    fetch("http://localhost:4000/api/v1/users")
      .then(resp => resp.json())
      .then(data => this.setState({ allUsers: data }));
  };

  passLogin = data => {
    // make this arrow fn
    console.log("user data: ", data);
    console.log("all users: ", this.state.allUsers);
    this.setState({ user: data });
    debugger;
    // console.log("all users: ", this.state.allUsers);

    // document.location = "/matches";

    return (
      <div>
        <Header />
        <MatchesContainer />
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <Header />
                <WelcomeContainer
                  allUsers={this.state.allUsers}
                  passLogin={this.passLogin}
                />
              </div>
            );
          }}
        />{" "}
        {/* close Welcome route */}
        <Route
          exact
          path="/createprofile"
          render={() => {
            return (
              <div>
                <Header />
                <CreateProfileContainer user={this.state.user} />
              </div>
            );
          }}
        />
        {/* close CreateProfile route */}
        <Route
          exact
          path="/matches"
          render={() => {
            return (
              <div>
                <Header />
                <MatchesContainer allUsers={this.state.allUsers} />
              </div>
            );
          }}
        />
        {/* close Matches route */}
      </Router>
    );
  }
}

export default App;
