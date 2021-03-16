import { Component } from "react";

import { MessageList } from "./components";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Сообщения</h1>
        <MessageList />
      </div>
    );
  }
}
