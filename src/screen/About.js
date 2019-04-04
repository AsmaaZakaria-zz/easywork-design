import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import People from '../containers/about/People';
import Reviews from '../containers/about/Reviews';


const styles = theme => ({
  root: {
    marginTop: 150,
  },
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
    height: 220,
  },
  cardContent: {
    flexGrow: 1,
    margin: 'auto',
    textAlign: 'center',
  },
});

const About = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Reviews />
      <People classes={classes}/>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(About);
