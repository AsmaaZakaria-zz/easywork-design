import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: 120,
    height: 150,
    backgroundColor: '#252584'
  },

});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);
