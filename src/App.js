import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProfileContainer from "./containers/ProfileContainer";
import MatchContainer from "./containers/MatchContainer";
import MatchesContainer from "./containers/MatchesContainer";
import MessagesContainer from "./containers/MessagesContainer";
import WelcomeContainer from "./containers/WelcomeContainer";
import Header from "./components/Header";

// import ReactDOM from "react-dom";
// import Button from "react-rainbow-components/components/Button";

import "./App.css";

class App extends React.Component {
  state = {
    allUsers: [],
    allMessages: []
  };

  componentDidMount() {
    this.doTheFetch();
  }

  doTheFetch = () => {
    console.log("starting");
    fetch("http://localhost:4000/api/v1/users")
      .then(resp => resp.json())
      .then(data =>
        this.setState({ allUsers: data }, () =>
          console.log("Users:", this.state.allUsers)
        )
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
                <WelcomeContainer />
              </div>
            );
          }}
        />{" "}
        {/* close Welcome route */}
        <Route
          exact
          path="/match"
          render={() => {
            return (
              <div className="match">
                <div>
                  <MatchContainer matches={this.state.allUsers} />
                </div>
              </div>
            );
          }}
        />{" "}
        {/* close Matches route */}
        <Route
          exact
          path="/matches"
          render={() => {
            return (
              <div className="matches">
                <div>
                  <MatchesContainer matches={this.state.allUsers} />
                </div>
              </div>
            );
          }}
        />{" "}
        {/* close Matches route */}
        <Route
          exact
          path="/messages"
          render={() => {
            return (
              <div className="messages">
                <div>
                  <MessagesContainer />
                </div>
              </div>
            );
          }}
        />{" "}
        {/* close Messages route */}
        <Route
          exact
          path="/profile"
          render={() => {
            return (
              <div className="profile">
                <div>
                  <ProfileContainer />
                </div>
              </div>
            );
          }}
        />{" "}
        {/* close Profile route */}
      </Router>
    );
  }
}

/*     <Button
        label="Hello!"
        variant="brand"
        onClick={() => alert("Hello World!")}
        /> */

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
