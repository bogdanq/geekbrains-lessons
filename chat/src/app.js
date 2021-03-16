import { Component } from "react";

import styles from "./app.module.css";

export class App extends Component {
  state = {
    value: "",
    messages: [],
  };

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handlePressInput = ({ code }) => {
    if (code === "Enter") {
      this.sendMessage();
    }
  };

  sendMessage = () => {
    const { value, messages } = this.state;

    if (!value) {
      return;
    }

    this.setState({
      messages: [value, ...messages],
      value: "",
    });
  };

  render() {
    const { value, messages } = this.state;

    return (
      <div>
        <h1>Сообщения</h1>
        <input
          placeholder="Введите сообщение"
          value={value}
          onChange={this.handleChangeInput}
          onKeyPress={this.handlePressInput}
        />
        <button onClick={this.sendMessage}>Отправить</button>
        <div className={styles.scrollBlock}>
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    );
  }
}
