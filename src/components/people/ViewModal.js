import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DetailsIcon from '@material-ui/icons/Details';

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
    borderRadius: 35,
    textAlign: 'center',
  },
});

class ViewModal extends React.Component {
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
    const { classes, person } = this.props;

    return (
      <div>
        <DetailsIcon onClick={this.handleOpen} style={{color: '#607D8B'}}/>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <img src={person.photo} alt={person.name} style={{maxWidth: '45%', borderRadius: '50%'}}/>
            <Typography variant="h6" id="modal-title">
              {person.name}
            </Typography>
            <Typography variant="subtitle1" id="modal-title">
              {person.position}
            </Typography>
            <Typography variant="subtitle2" id="simple-modal-description">
              {person.about}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

ViewModal.propTypes = {
  classes: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewModal);
