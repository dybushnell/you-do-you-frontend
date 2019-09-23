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
    // console.log("starting");
    fetch("http://localhost:4000/api/v1/users")
      .then(resp => resp.json())
      .then(data => this.setState({ allUsers: data }));
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
              <div>
                <Header />
                <MatchContainer matches={this.state.allUsers} />
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
              <div>
                <Header />
                <MatchesContainer matches={this.state.allUsers} />
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
              <div>
                <Header />
                <MessagesContainer />
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
              <div>
                <Header />
                <ProfileContainer />
              </div>
            );
          }}
        />
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
