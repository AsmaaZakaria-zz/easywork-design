import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Grid } from '@material-ui/core';

import apple from '../images/partners/apple.PNG';
import airbnb from '../images/partners/airbnb.png';
import google from '../images/partners/google.PNG';
import nvidia from '../images/partners/nvidia.PNG';
import tesla from '../images/partners/tesla.PNG';
import samsung from '../images/partners/samsung.PNG';
import facebook from '../images/partners/facebook.PNG';
import microsoft from '../images/partners/microsoft.PNG';

const PARTNERS = [apple, airbnb, google, nvidia, tesla, samsung, facebook, microsoft];


const styles = theme => ({
  root: {
    marginTop: 100,
  },
  header: {
    textAlign: 'center'
  }
});

function Partners(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h4" gutterBottom>
        We've worked with
      </Typography>
      <div className={classes.layout}>
          <Grid container spacing={40} style={{marginTop: 20}} justify="center" alignItems="center">
            {PARTNERS.map(part => (
              <Grid item key={part}>
                <img src={part} alt={part}/>
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  );
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Partners);
