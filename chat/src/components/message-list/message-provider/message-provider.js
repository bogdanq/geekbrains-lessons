import { Component } from "react";

export class MessageProvider extends Component {
  state = {
    conversations: [
      {
        title: "room1",
        value: "",
        lastMessage: { author: "User", message: "hi!", createdTs: new Date() },
      },
      { title: "room2", value: "", lastMessage: null },
      { title: "room3", value: "", lastMessage: null },
    ],
    messages: {
      room1: [{ author: "User", message: "hi!", createdTs: new Date() }],
    },
  };

  handleChangeValue = (value) => {
    const {
      match: { params },
    } = this.props;

    this.setState({
      conversations: this.state.conversations.map((conversation) =>
        conversation.title === params.id
          ? { ...conversation, value }
          : conversation
      ),
    });
  };

  sendMessage = ({ author, message }) => {
    if (!message) {
      return;
    }

    const {
      match: { params },
    } = this.props;
    const { messages, conversations } = this.state;

    const newMessage = { author, message, createdTs: new Date() };

    this.setState({
      conversations: conversations.map((conversation) =>
        conversation.title === params.id
          ? {
              ...conversation,
              lastMessage: newMessage,
              value: "",
            }
          : conversation
      ),
      messages: {
        ...messages,
        [params.id]: [...(messages[params.id] || []), newMessage],
      },
    });
  };

  componentDidUpdate(_, prevState) {
    const {
      match: { params },
    } = this.props;
    const { conversations, messages } = this.state;

    if (!params.id) {
      return;
    }

    const { lastMessage } = conversations.find(
      (conversation) => conversation.title === params.id
    );

    const currentMessages = messages[params.id];
    const prevMessages = prevState.messages[params.id];

    if (
      lastMessage?.message !== "Как дела ?" &&
      currentMessages !== prevMessages
    ) {
      setTimeout(() => {
        this.sendMessage({ author: "Bot", message: "Как дела ?" });
      }, 500);
    }
  }

  render() {
    const { children, match } = this.props;

    const { conversations, messages } = this.state;

    const { id } = match.params ?? {};

    const state = {
      conversations,
      messages: messages[id] ?? [],
      value:
        conversations.find((conversation) => conversation.title === id)
          ?.value || "",
    };

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue,
    };

    return children([state, actions]);
  }
}
