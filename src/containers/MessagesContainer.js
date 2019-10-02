import React from "react";
import MessageComponent from "../components/MessageComponent";
import BigProfileComponent from "../components/BigProfileComponent";

class MessagesContainer extends React.Component {
  state = {
    allMessages: [],
    messageProfile: []
  };

  componentDidMount = () => {
    fetch("http://localhost:4000/api/v1/messages")
      .then(resp => resp.json())
      .then(data => this.setState({ allMessages: data }));
  };

  postMessage = (recipient, message) => {
    fetch("http://localhost:4000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message_text: message,
        sender_id: this.props.email,
        recipient_id: recipient
      })
    }).then(
      fetch("http://localhost:4000/api/v1/messages")
        .then(resp => resp.json())
        .then(data => this.setState({ allMessages: data }))
    );
  };

  deleteMessage = id => {
    fetch("http://localhost:4000/api/v1/messages/" + id, {
      method: "DELETE"
    }).then(
      fetch("http://localhost:4000/api/v1/messages")
        .then(resp => resp.json())
        .then(data => this.setState({ allMessages: data }))
    );
  };

  render = () => {
    let messagesArray = this.state.allMessages.filter(
      message =>
        message.recipient_id === this.props.email ||
        message.sender_id === this.props.email
    );

    let messageComponents = messagesArray.map(message => (
      <MessageComponent
        key={message.id}
        identifier={message.id}
        allUsers={this.props.allUsers}
        sender_id={message.sender_id}
        recipient_id={message.recipient_id}
        message_text={message.message_text}
        sent={message.created_at}
        first_name={this.props.first_name}
        email={this.props.email}
        birthdate={this.props.birthdate}
        location={this.props.location}
        relationship_goal={this.props.relationship_goal}
        blood_type={this.props.blood_type}
        image_url={this.props.image_url}
        postMessage={this.postMessage}
        deleteMessage={this.deleteMessage}
      />
    ));

    return (
      <div className="messages-container">
        <div className="user-profile-big">
          <BigProfileComponent
            allUsers={this.props.allUsers}
            first_name={this.props.first_name}
            email={this.props.email}
            birthdate={this.props.birthdate}
            location={this.props.location}
            relationship_goal={this.props.relationship_goal}
            blood_type={this.props.blood_type}
            image_url={this.props.image_url}
          />
        </div>
        <div className="message-list">
          <h2>Hi {this.props.first_name}!</h2>
          <div>Here are your messages</div>
          <br />
          {messageComponents}
        </div>
        <div className="message-profile"></div>
      </div>
    );
  };
}
export default MessagesContainer;
