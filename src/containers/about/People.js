import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Button, Fab } from '@material-ui/core';

import AboutHeader from '../../components/headers/AboutHeader';
import Card from '../../components/people/Card';
import PeopleData from '../../store/People';
import EditModal from '../../components/people/EditModal';

import DeleteIcon from '@material-ui/icons/Delete';

import happyIcon from '../../images/icons/happy-face.svg';

const styles = theme => ({
  root: {
    marginTop: 150,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  removebtn: {
    marginLeft: 20,
    color: '#FFAB91',
    backgroundColor: '#FFF9C4',
  },
  fab: {
    margin: theme.spacing.unit,
    height: 45,
    width: 45,
    backgroundColor: '#FBE9E7',
  },
  btnContainer: {
    float: 'right',
    marginRight: theme.spacing.unit * 37,
    [theme.breakpoints.down('xs')]: {
      marginRight: 85,
    },
    display: 'flex',
  }
});

class PeopleCards extends Component {
  state = {
    person: {},
    selectedPeople: 0,
    remove: false,
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AboutHeader
          icon={happyIcon}
          iconColor="deeppink"
          header="Our important people are listed here"
        />
        {
          this.state.selectedPeople === 0 ?
            <div className={classes.btnContainer}>
              <Button
                onClick={() => { this.setState({
                    remove: true,
                    selectedPeople: this.state.selectedPeople+1,
                  });
                }}
                className={classes.removebtn}
              >Remove</Button>
              <EditModal
                person={this.state.person}
                header="Add People"
                btn="Add"
              />
            </div> :
            <div className={classes.btnContainer}>
              <Button onClick={() => this.setState({remove: false, selectedPeople: 0})} style={{color: 'grey'}}>Cancel</Button>
              <Fab className={classes.fab}>
                <DeleteIcon style={{color: '#D84315'}}/>
              </Fab>

            </div>
        }

        <div className={classes.layout}>
            <Grid container spacing={40} style={{marginTop: 20}} justify="center" alignItems="center">
              {PeopleData.map(person => (
                <Grid item key={person} sm={6} md={4} lg={3}>
                  <Card
                    person={person}
                    remove={this.state.remove}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
      </div>
    );
  }
}

PeopleCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeopleCards);
