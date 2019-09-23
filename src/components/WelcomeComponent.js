import React from "react";

class WelcomeComponent extends React.Component {
  render() {
    return (
      <div className="welcome-box">
        <div className="login"> Login</div>
        <br />
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              placeholder="email"
              //   value={this.state.email}
              name="email"
              //   onChange={this.changeHandler}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              //   value={this.state.username}
              name="password"
              //   onChange={this.changeHandler}
            />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
        <br />
        <br />
        <div className="signup"> Signup</div>
      </div>
    );
  }
}

export default WelcomeComponent;
