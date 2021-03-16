import { Component } from "react";

import { Message } from "../message";

export class MessageList extends Component {
  state = {
    messages: [{ author: "User", value: "Привет" }],
  };

  sendMessage = () => {
    const { messages } = this.state;

    this.setState({
      messages: [...messages, { author: "User", value: "Нормально" }],
    });
  };

  componentDidUpdate() {
    const { messages } = this.state;

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.author === "User") {
      setTimeout(() => {
        this.setState((state) => ({
          messages: [...state.messages, { author: "bot", value: "Как дела?" }],
        }));
      }, 500);
    }
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <button onClick={this.sendMessage}>Отправить сообщение</button>

        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    );
  }
}
