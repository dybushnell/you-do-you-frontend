import React from "react";

class CreateProfileForm extends React.Component {
  state = {
    first_name: "",
    email: "",
    birthdate: "",
    location: "",
    relationship_goal: "",
    blood_type: "",
    image_url: "",
    emailCheck: ""
  };

  submitHandler = e => {
    e.preventDefault();

    //If any fields are blank, alert user
    if (
      this.state.first_name === "" ||
      this.state.email === "" ||
      this.state.birthdate === "" ||
      this.state.location === "" ||
      this.state.relationship_goal === "" ||
      this.state.blood_type === "" ||
      this.state.image_url === ""
    ) {
      alert("Please fill all fields to complete your profile!");
    }
    //If all fields are complete, check if email is already being used
    else {
      let checkEmail = this.props.allUsers.filter(
        user => user.email === this.state.email
      );
      if (checkEmail.length > 0) {
        this.setState({
          emailCheck:
            "Email already exists; please use a different email address or login to your account"
        });
      }
      //If email is unique, POST new user
      else {
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
      }
    }
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div className="profile-box">
        <form onSubmit={this.submitHandler}>
          <span>first name:</span>
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
          <span>email:</span>
          <br />
          <input
            className="input"
            type="text"
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.changeHandler}
          />
          <span style={{ color: "red" }}>{this.state.emailCheck}</span>
          <br />
          <br />
          <span>location:</span>
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
          <span>birthdate:</span>
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
          <span>bloodtype:</span>
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
          <span>relationship sought:</span>
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
          <span>link to image:</span>
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
