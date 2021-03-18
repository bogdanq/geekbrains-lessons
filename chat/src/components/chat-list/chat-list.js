import { Component } from "react";
import { List } from "@material-ui/core";
import { Chat } from "./chat";

export class ChatList extends Component {
  state = {
    selectedIndex: 0,
    chats: ["room1", "room2", "room3"],
  };

  handleListItemClick = (index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { selectedIndex, chats } = this.state;

    return (
      <List component="nav">
        {chats.map((chat, index) => (
          <Chat
            key={chat}
            title={chat}
            selected={selectedIndex === index}
            handleListItemClick={() => this.handleListItemClick(index)}
          />
        ))}
      </List>
    );
  }
}
