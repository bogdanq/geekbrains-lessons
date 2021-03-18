import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./layout.module.css";

export class Layout extends Component {
  static propTypes = {
    header: PropTypes.node.isRequired,
    chats: PropTypes.node.isRequired,
    messages: PropTypes.node.isRequired,
  };

  render() {
    const { header, chats, messages } = this.props;

    return (
      <div className={styles.body}>
        <div className={styles.header}>{header}</div>

        <div className={styles.content}>
          <div className={styles.chats}>{chats}</div>
          <div className={styles.messages}>{messages}</div>
        </div>
      </div>
    );
  }
}
