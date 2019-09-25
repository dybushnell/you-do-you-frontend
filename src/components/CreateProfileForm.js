import React from "react";

class CreateProfileForm extends React.Component {
  state = {
    first_name: "",
    email: "",
    birthdate: "",
    location: "",
    relationship_goal: "",
    blood_type: "",
    image_url: ""
  };

  submitHandler = e => {
    e.preventDefault();
    let newUser = [
      {
        first_name: this.state.first_name,
        email: this.state.email,
        birthdate: this.state.birthdate,
        location: this.state.location,
        relationship_goal: this.state.relationship_goal,
        blood_type: this.state.blood_type,
        image_url: this.state.image_url
      }
    ];
    fetch("http://localhost:4000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        email: this.state.email,
        birthdate: this.state.birthdate,
        location: this.state.location,
        relationship_goal: this.state.relationship_goal,
        blood_type: this.state.blood_type,
        image_url: this.state.image_url
      })
    }).then(this.props.passLogin(newUser));
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="profile-box">
        <form onSubmit={this.submitHandler}>
          first name:
          <br />
          <input
            className="input"
            type="text"
            placeholder="first name"
            value={this.state.first_name}
            name="first_name"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          email:
          <br />
          <input
            className="input"
            type="text"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          location:
          <br />
          <input
            className="input"
            type="text"
            placeholder="location"
            value={this.state.location}
            name="location"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          birthdate:
          <br />
          <input
            className="input"
            type="date"
            placeholder="birthdate"
            value={this.state.birthdate}
            name="birthdate"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          bloodtype:
          <select
            className="input"
            placeholder="blood_type"
            name="blood_type"
            value={this.state.bloodtype}
            onChange={this.changeHandler}
          >
            <option></option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <br />
          <br />
          relationship sought:
          <select
            className="input"
            placeholder="relationship_goal"
            name="relationship_goal"
            value={this.state.relationship_goal}
            onChange={this.changeHandler}
          >
            <option></option>
            <option value="short-term">short-term</option>
            <option value="long-term">long-term</option>
          </select>
          <br />
          <br />
          link to image:
          <br />
          <input
            className="input"
            type="text"
            placeholder="image url"
            value={this.state.image_url}
            name="image_url"
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default CreateProfileForm;
