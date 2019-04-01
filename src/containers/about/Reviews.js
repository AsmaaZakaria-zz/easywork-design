import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';

const styles = theme => ({

});

const Reviews = ({ props }) => {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Grid>

      </Grid>
    </div>
  );
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Reviews);
