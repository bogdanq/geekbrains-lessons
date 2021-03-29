import { Component } from "react";
import { List } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Chat } from "./chat";

export class ChatList extends Component {
  render() {
    const {
      conversations,
      match: { params },
    } = this.props;

    const chatId = params.id;

    return (
      <List component="nav">
        {conversations.map((chat) => (
          <Link key={chat.title} to={`/chat/${chat.title}`}>
            <Chat selected={chat.title === chatId} chat={chat} />
          </Link>
        ))}
      </List>
    );
  }
}
