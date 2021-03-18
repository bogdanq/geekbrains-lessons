import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Layout, Header, ChatList, MessageList } from "./components";
import "./global.css";

const theme = createMuiTheme({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Layout
      header={<Header />}
      chats={<ChatList />}
      messages={<MessageList />}
    />
  </ThemeProvider>,
  document.getElementById("root")
);
