import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import People from '../containers/about/People';
import Reviews from '../containers/about/Reviews';


const styles = theme => ({
  root: {
    marginTop: 150,
  },
});

const About = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Reviews />
      <People />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(About);
