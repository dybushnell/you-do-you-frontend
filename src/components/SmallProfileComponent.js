import React from "react";

class SmallProfileComponent extends React.Component {
  render() {
    // debugger;
    return (
      <div className="user-profile-small">
        <br />
        <img src={this.props.image_url} alt="" />
        <h2>{this.props.first_name}</h2>
        {/* {this.props.email}@gmail.com */}
        {/* <br /> */}
        {this.props.birthdate}
        <br />
        {this.props.location}
        <br />
        Blood type: {this.props.blood_type}
        <br />
        Searching for {this.props.relationship_goal} relationship
        <br />
        <br />
      </div>
    );
  }
}

export default SmallProfileComponent;
