import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from "@material-ui/core/Icon/Icon";
import Fab from "@material-ui/core/Fab/Fab";
import axios from "axios";

export default class AddNewArticleFormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  add = (title, content) => {
    this.handleClose();
    axios.post("/api/article/new", {
      title: title,
      content: content
    });
  };

  render() {
    return (
      <div>
        <Fab color="secondary" aria-label="Add" onClick={this.handleClickOpen}>
          <Icon>add_icon</Icon>
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Article</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              id="title"
              type="text"
              label="Title of Article"
              fullWidth
              onChange={e => this.setState({ title: e.target.value })}
            />
            <TextField
              type="text"
              id="title"
              label="Content"
              fullWidth
              margin="normal"
              onChange={e => this.setState({ content: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.add(this.state.title, this.state.content)} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}