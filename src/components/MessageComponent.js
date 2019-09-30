import React from "react";

class MessageComponent extends React.Component {
  render() {
    if (this.props.sender_id === this.props.email) {
      return (
        <div className="message-sent">
          from: You
          <br />
          to: {this.props.recipient_id}
          <br />
          message: {this.props.message_text}
          <br />
          <br />
        </div>
      );
    } else if (this.props.recipient_id === this.props.email) {
      return (
        <div className="message-received">
          from: {this.props.sender_id}
          <br />
          to: You
          <br />
          message: {this.props.message_text}
          <br />
          <br />
        </div>
      );
    }
  }
}

export default MessageComponent;
