import React from "react";
import "../App.css";
import { TextField, IconButton, Chip } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";

class InviteField extends React.Component {
  state = {
    value: "",
    emails: [],
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
    });
  };

  handleKeyDown = (evt) => {
    if (["Enter", ","].includes(evt.key)) {
      evt.preventDefault();

      var email = this.state.value.trim();

      if (email) {
        this.setState({
          emails: [...this.state.emails, email],
          value: "",
        });
        this.props.onNewInvitee(this.state.emails);
      }
    }
  };

  handlePlusButton = (evt) => {
    var email = this.state.value.trim();
    if (email) {
      this.setState({
        emails: [...this.state.emails, email],
        value: "",
      });
    }
  };

  handleDelete = (evt) => {};

  render() {
    const len = this.state.emails.length;
    return (
      <div>
        <TextField
          className="TextInput"
          label="Invitees"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          autoFocus={true}
          style={{ marginBottom: len === 0 ? "42px" : "0px" }}
        />
        <IconButton
          onClick={this.handlePlusButton}
          style={{ marginLeft: "-40px", marginBottom: "-32px" }}
        >
          <AddCircle color="primary" />
        </IconButton>
        <br />
        {this.state.emails.map((email) => (
          <Chip
            className="Chip"
            key={email}
            label={email}
            onDelete={this.handleDelete}
            color="primary"
          ></Chip>
        ))}
      </div>
    );
  }
}

export default InviteField;
