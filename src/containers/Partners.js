import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, Grid } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";

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

class Partners extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.header} variant="h4" gutterBottom>
          We've worked with
        </Typography>
        <div className={classes.layout}>
            <Grid container style={{marginTop: 20}} justify="center" alignItems="center">
              {PARTNERS.map((part, index) => (
                <VisibilitySensor offset={{ top: 10 }}>
                 {({ isVisible }) => (
                   <Spring
                     delay={300}
                     to={{
                       opacity: isVisible ? 1 : 0,
                       transform: isVisible ? "translateY(0)" : "translateY(400px)"
                     }}
                   >
                     {props =>
                       <Grid item key={part} style={{ marginRight: 20, ...props }}>
                        <img src={part} alt={part}/>
                      </Grid>}
                   </Spring>
                 )}
               </VisibilitySensor>
              ))}
            </Grid>
          </div>
      </div>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Partners);
