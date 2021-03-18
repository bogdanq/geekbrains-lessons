import { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./message.module.css";

export class Message extends Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  };

  render() {
    const {
      message: { value, author },
    } = this.props;

    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: author === "User",
        })}
      >
        <h3>{value}</h3>
        <p>{author}</p>
        <p>12.03</p>
      </div>
    );
  }
}
