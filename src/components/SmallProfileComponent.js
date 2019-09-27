import React from "react";

class SmallProfileComponent extends React.Component {
  state = { showForm: false, messageOrSend: true, message: "" };

  clickHandlerShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
    this.setState({ messageOrSend: !this.state.messageOrSend });
  };

  clickHandlerSendMessage = () => {
    this.setState({ showForm: !this.state.showForm });
    this.setState({ messageOrSend: !this.state.messageOrSend });
    //put the fetch in the container above this so that I can use the id of both profiles
    fetch("http://localhost:4000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message_text: this.state.message,
        sender_id: this.props.email,
        recipient_id: this.props.email
      })
    });
  };

  messageChange = e => {
    this.setState({ message: e.target.value });

    console.log(e.target.value);
  };

  render() {
    // debugger;
    return (
      <div className="user-profile-small">
        <br />
        <img src={this.props.image_url} alt="" />
        <h2>{this.props.first_name}</h2>
        {this.props.birthdate}
        <br />
        {this.props.location}
        <br />
        Blood type: {this.props.blood_type}
        <br />
        Searching for {this.props.relationship_goal} relationship
        <br />
        <br />
        {this.state.messageOrSend ? (
          <button onClick={this.clickHandlerShowForm}> Type a message </button>
        ) : (
          <button onClick={this.clickHandlerSendMessage}>
            {" "}
            Send your message!{" "}
          </button>
        )}
        <br />
        {this.state.showForm ? (
          <div>
            <br />
            <textarea
              value={this.state.message}
              onChange={this.messageChange}
            ></textarea>
          </div>
        ) : null}
        {/*end showForm ternary*/}
        <br />
        <br />
      </div>
    );
  }
}

export default SmallProfileComponent;
