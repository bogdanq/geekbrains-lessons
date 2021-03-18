import { Component, createRef } from "react";
import classnames from "classnames";
import { InputAdornment, Input, withStyles } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { Message } from "./message";
import styles from "./message-list.module.css";

const StyledInput = withStyles((theme) => ({
  root: {
    "&": {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: " 15px",
    },
  },
}))(Input);
export class MessageList extends Component {
  state = {
    messages: [
      { author: "User", value: "Привет" },
      { author: "User", value: "Привет" },
    ],
    value: "",
  };

  ref = createRef();

  componentDidUpdate(_, state) {
    const { messages } = this.state;

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.author === "User" && state.messages !== messages) {
      setTimeout(() => {
        this.sendMessage({ author: "bot", value: "Как дела ?" });
      }, 500);
    }
  }

  sendMessage = ({ author, value }) => {
    const { messages } = this.state;

    if (!value) {
      return;
    }

    this.setState(
      {
        messages: [...messages, { author, value }],
        value: "",
      },
      this.handleScrollBottom
    );
  };

  handleChangeInput = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handlePressInput = ({ code }) => {
    if (code === "Enter") {
      this.sendMessage({ author: "User", value: this.state.value });
    }
  };

  handleScrollBottom = () => {
    if (this.ref.current) {
      this.ref.current.scrollTo(0, this.ref.current.scrollHeight);
    }
  };

  render() {
    const { messages, value } = this.state;

    return (
      <>
        <div ref={this.ref}>
          {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>

        <StyledInput
          fullWidth={true}
          placeholder="Введите сообщение..."
          value={value}
          onChange={this.handleChangeInput}
          onKeyPress={this.handlePressInput}
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className={classnames(styles.icon)}
                  onClick={() => this.sendMessage({ author: "User", value })}
                />
              )}
            </InputAdornment>
          }
        />
      </>
    );
  }
}
