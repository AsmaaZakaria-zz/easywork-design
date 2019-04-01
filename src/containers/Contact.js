import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Grid } from '@material-ui/core';

import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const styles = theme => ({
  root: {
    marginTop: 120,
  },
  header: {
    textAlign: 'center'
  },
  grid: {
    margin: '0 auto',
    width: '75%'
  }
});

function Contact(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container justify="center" className={classes.grid} spacing={0}>
        <Grid item sm>
          <ContactForm />
        </Grid>
        <Grid item sm>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Contact);
