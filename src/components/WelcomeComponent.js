import React from "react";

class WelcomeComponent extends React.Component {
  state = { email: "", exists: true };

  submitLogin = e => {
    e.preventDefault();
    let emailMatchedUser = this.props.allUsers.filter(
      user => user.email === this.state.email
    );
    if (emailMatchedUser.length === 1) {
      this.props.passLogin(emailMatchedUser);
    } else {
      this.setState({ exists: false });
    }
  };

  submitSignup = e => {
    e.preventDefault();
    this.props.passLocation();
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log("in WelcomeComponent: ", this.props.allUsers);
  };

  render() {
    return (
      <div className="welcome-box">
        <div className="login"> Member login</div>
        <br />
        <div>
          <form onSubmit={this.submitLogin}>
            <input
              className="input"
              type="text"
              placeholder="username"
              value={this.state.email}
              name="email"
              onChange={this.changeHandler}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
        <br />
        {this.state.exists ? (
          ""
        ) : (
          <div className="warning">User not found!</div>
        )}
        <br />
        <br />
        <form onSubmit={this.submitSignup}>
          <div className="signup">
            {" "}
            Not a member? <br />
            Sign up here!
            <br />
            <br />
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default WelcomeComponent;
