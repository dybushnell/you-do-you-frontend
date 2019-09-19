import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProfileContainer from "./containers/ProfileContainer";
import MatchContainer from "./containers/MatchContainer";
import MessagesContainer from "./containers/MessagesContainer";
import WelcomeContainer from "./containers/WelcomeContainer";

import Button from "react-rainbow-components/components/Button";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="welcome">
                <div>
                  <WelcomeContainer />
                </div>
              </div>
            );
          }}
        />{" "}
        {/* close Welcome route */}
        <Route
          exact
          path="/matches"
          render={() => {
            return (
              <div className="matches">
                <div>
                  <MatchContainer />
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
