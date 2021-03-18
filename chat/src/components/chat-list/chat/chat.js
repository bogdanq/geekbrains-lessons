import { Component } from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import styles from "./chat.module.css";

const StyledListItem = withStyles((theme) => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
}))(ListItem);

export class Chat extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    handleListItemClick: PropTypes.func.isRequired,
  };

  render() {
    const { handleListItemClick, selected, title } = this.props;

    return (
      <StyledListItem button selected={selected} onClick={handleListItemClick}>
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <div className={styles.description}>
          <ListItemText className={styles.text} primary={title} />
          <ListItemText className={styles.text} primary="12.30" />
        </div>
      </StyledListItem>
    );
  }
}
