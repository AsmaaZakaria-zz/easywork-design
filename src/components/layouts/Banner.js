import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';

import banner from '../../images/banner/banner.png';
import banner1 from '../../images/banner/banner-rounded-001.svg';
import banner2 from '../../images/banner/banner-rounded-002.svg';

// // TODO:
// FIX HEADER STYLE BETWEEN 1280 TO 1303

const styles = theme => ({
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '96%'
    },
  },
  banner: {
    height: '600px',
    backgroundColor: '#252584',
    display: 'flex',
  },
  leftBanner: {
    marginTop: 50,
    marginLeft: -77,
    maxWidth: '81%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '200%'
    },
  },
  mainBanner: {
    maxWidth: '95%',
    marginTop: 195,
    marginRight: 200,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  rightBanner: {
    width: '100%',
    marginTop: 160,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  headerContainer: {
    display: 'grid',
    position: 'absolute',
    margin: 155,
    width: '50%',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: 200,
      marginLeft: 50,
    },
  },
  header: {
    fontSize: '4.5em',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5em',
      color: 'red',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '3em',
      color: 'green'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '4.5em',
      color: 'yellow'
    },
  },
  text: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  }
});

const Banner = (props) => {
  const { classes } = props;
  return (
    <div className={classes.banner}>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={6}>
          <img src={banner1} alt="left banner rounded" className={classes.leftBanner}/>
        </Grid>
        <Grid item xs={4}>
          <img src={banner} alt="main banner" className={classes.mainBanner}/>
        </Grid>
        <Grid item xs={2}>
          <img src={banner2} alt="right banner rounded" className={classes.rightBanner}/>
        </Grid>
      </Grid>
      <div className={classes.headerContainer}>
        <Typography component="h1" gutterBottom className={classes.header}>
          Make developments
          easy with us.
        </Typography>
        <Typography component="h6" variant="h6" gutterBottom className={classes.text}>
          Doing development can never be easy, and it takes time and resources.<br />
          We at EasyWork have a solution.
        </Typography>
      </div>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
