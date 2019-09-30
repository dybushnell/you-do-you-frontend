import React from "react";
import MessageComponent from "../components/MessageComponent";
import BigProfileComponent from "../components/BigProfileComponent";

class MessagesContainer extends React.Component {
  state = {
    allMessages: []
  };

  componentDidMount = () => {
    fetch("http://localhost:4000/api/v1/messages")
      .then(resp => resp.json())
      .then(data => this.setState({ allMessages: data }));
  };

  render = () => {
    let messagesArray = this.state.allMessages.filter(
      message =>
        message.recipient_id === this.props.email ||
        message.sender_id === this.props.email
    );

    let messageComponents = messagesArray.map(message => (
      <MessageComponent
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
          <h3>Hi {this.props.first_name}!</h3>
          <div>Here are your messages</div>
          <br />
          {messageComponents}
        </div>
      </div>
    );
  };
}
export default MessagesContainer;
