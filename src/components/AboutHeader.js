import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {

  },
  container: {
    paddingLeft: 200,
  },
  icon: {
    backgroundColor: 'black',
    borderRadius: '50%',
    height: 50,
    width: 50,
  },
  header: {
    paddingLeft: 50,
    fontSize: 35,
  },
  img: {
    paddingTop: 12,
    paddingLeft: 13,
  }
});

const AboutHeader = ({ classes, header, icon, iconColor}) => {
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" className={classes.container}>
        <Grid item>
          <div className={classes.icon} style={{backgroundColor: iconColor}}>
            <img src={icon} alt="header-icon" className={classes.img}/>
          </div>
        </Grid>
        <Grid item sm={5}>
          <Typography className={classes.header} variant="h4" gutterBottom>
            {header}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

AboutHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutHeader);
