import React from "react";

class MessageComponent extends React.Component {
  state = {
    showProfile: false,
    showForm: false,
    messageOrSend: true,
    message: ""
  };

  clickHandlerShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
    this.setState({ messageOrSend: !this.state.messageOrSend });
  };

  clickHandlerSendMessage = () => {
    this.setState({ showForm: !this.state.showForm });
    this.setState({ messageOrSend: !this.state.messageOrSend });
    //put the fetch in the container above this so that I can use the id of both profiles
    this.props.postMessage(this.props.email, this.state.message);
  };

  messageChange = e => {
    this.setState({ message: e.target.value });

    console.log(e.target.value);
  };

  deleteMessage = () => {
    this.props.deleteMessage(this.props.identifier);
  };

  render() {
    if (this.props.sender_id === this.props.email) {
      return (
        <div className="message-sent">
          from: You
          <br />
          to: {this.props.recipient_id}
          <br />
          <br />
          {this.props.message_text}
          <br />
          <br />
          <button onClick={this.deleteMessage}> Delete message </button>
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
          {this.props.message_text}
          <br />
          <br />
          {this.state.showForm ? (
            <div>
              <textarea
                value={this.state.message}
                onChange={this.messageChange}
              ></textarea>
              <br />
            </div>
          ) : null}
          {this.state.messageOrSend ? (
            <button onClick={this.clickHandlerShowForm}> Reply </button>
          ) : (
            <button onClick={this.clickHandlerSendMessage}>
              {" "}
              Send your message!{" "}
            </button>
          )}
          <br />
          <button onClick={this.deleteMessage}> Delete message </button>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default MessageComponent;
