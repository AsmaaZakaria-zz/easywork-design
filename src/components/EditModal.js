import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal, Button, Divider, FormControl, InputLabel, Input, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import defaultUser from '../images/defaultuser.png';

function getModalStyle() {
  const top = 60;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    borderRadius: 35
  },
  img: {
    maxWidth: '45%',
    borderRadius: '50%',
    display: 'block',
    marginLeft: 90,
    marginTop: 15
  },
  cancel: {
    marginRight: 20
  },
  btn: {
    marginLeft: 20,
    color: '#8B72BE',
    backgroundColor: '#D1C4E9',
  },
  fab: {
    margin: theme.spacing.unit,
    height: 30,
    width: 35,
    backgroundColor: '#FBE9E7',
  },
});

class EditModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, person, header, btn } = this.props;

    return (
      <div>
        {header === 'Add People' ?
          <Button onClick={this.handleOpen} className={classes.btn}>{btn}</Button> :
          <EditIcon onClick={this.handleOpen} style={{color:"#607D8B"}}/>
        }
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {header}
            </Typography>
            <Divider />

            <img
              src={person.photo || defaultUser}
              alt={person.name}
              className={classes.img}
            />
            <div style={{display: 'flex', marginLeft: 90}}>
              <Fab className={classes.fab}>
                <DeleteIcon style={{color: '#D84315'}}/>
              </Fab>
              <p style={{color: '#D84315'}}>Delete picture</p>
            </div>

            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input name="Name" type="text" id="Name" autoComplete="current-Name" value={person.name}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="position">Position</InputLabel>
                <Input id="position" name="position" autoComplete="position" value={person.position}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input id="description" name="description" multiline={true} value={person.about}/>
              </FormControl>
              <div style={{float: 'right', marginTop: 30}}>
                <Button variant="contained" className={classes.cancel}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                  {header === 'Add People' ? 'Add' : 'Edit'}
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

EditModal.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditModal);
