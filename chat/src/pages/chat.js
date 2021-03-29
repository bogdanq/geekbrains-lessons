import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Layout,
  Header,
  ChatList,
  MessageList,
  MessagesNotFound,
  MessageProvider,
} from "../components";

export class Chat extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.listenExistChat);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.listenExistChat);
  }

  listenExistChat = ({ code }) => {
    if (code === "Escape") {
      const { history } = this.props;
      history.push("/chat");
    }
  };

  render() {
    return (
      <Switch>
        <Route path={["/chat/:id", "/chat"]}>
          {(params) => (
            <MessageProvider {...params}>
              {([state, actions]) => {
                return (
                  <Layout
                    header={<Header />}
                    chats={
                      <ChatList
                        {...params}
                        conversations={state.conversations}
                      />
                    }
                  >
                    <Route path="/chat/:id">
                      <MessageList {...state} {...actions} />
                    </Route>
                    <Route exact={true} path="/chat">
                      <MessagesNotFound />
                    </Route>
                  </Layout>
                );
              }}
            </MessageProvider>
          )}
        </Route>
        <Route
          exact={true}
          path="*"
          component={() => <h1>такого чата нет</h1>}
        />
      </Switch>
    );
  }
}
