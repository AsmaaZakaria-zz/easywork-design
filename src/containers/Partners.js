import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Grid } from '@material-ui/core';
import { Transition } from 'react-spring/renderprops';

import apple from '../images/partners/apple.PNG';
import airbnb from '../images/partners/airbnb.png';
import google from '../images/partners/google.PNG';
import nvidia from '../images/partners/nvidia.PNG';
import tesla from '../images/partners/tesla.PNG';
import samsung from '../images/partners/samsung.PNG';
import facebook from '../images/partners/facebook.PNG';
import microsoft from '../images/partners/microsoft.PNG';

const PARTNERS = [apple, airbnb, google, nvidia, tesla, samsung, facebook, microsoft];

// TODO:
// ADD ANIMATION

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
          <Grid container style={{marginTop: 20}} justify="center" alignItems="center">
            {PARTNERS.map((part, index) => (
              <Transition
                  items={part} keys={index}
                  from={{ transform: 'translate3d(0,-40px,0)' }}
                  enter={{ transform: 'translate3d(0,0px,0)' }}
                  leave={{ transform: 'translate3d(0,-40px,0)' }}
                >
                {part => props => <div style={props}>
                  <Grid item key={part} style={{marginRight: 20}}>
                    <img src={part} alt={part}/>
                  </Grid>
                </div>}
              </Transition>
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
