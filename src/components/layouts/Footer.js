import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography, Hidden } from '@material-ui/core';

import logo from '../../images/header/logo.png';
// import bannerLeft from '../../images/banner/banner-rounded-001.svg';

// TODO:
// ADD Banner IMAGES

const styles = theme => ({
  root: {
    marginTop: 120,
    height: 150,
    backgroundColor: '#252584',
  },
  logoContainer: {
    display: 'inline-flex',
    marginLeft: 150,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: 90
    },
  },
  logoHeader: {
    margin: 'auto',
    paddingLeft: 20,
    fontSize: '1.7rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    color: 'white'
  },
  infoHeader: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
  },
  addressContainer: {
    paddingTop: 10,
    [theme.breakpoints.down('sm')]: {
      marginRight: 20,
      marginLeft: 45,
      height: 'fit-content',
    },
  },
  address: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 11
    },
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Grid container>
          <Grid item xs={4}>
            {/*<img src={bannerLeft} alt="banner-left"/>*/}
            <div className={classes.logoContainer}>
              <img src={logo} alt="logo"/>
              <Typography gutterBottom component="h2" className={classes.logoHeader}>
                Easy Work
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3} className={classes.addressContainer}>
            <Typography variant="h6" gutterBottom className={classes.infoHeader}>
              Address
            </Typography>
            <Typography className={classes.address}>
              52-1, Jalan Awan Hijua, Taman <br />
              Overseas Union, 58200 Kuala <br />
              Lumpur, Wilaya Persektuan <br />
              Kuala Lumpur
            </Typography>
          </Grid>
          <Grid item xs={3} style={{paddingTop: 10}}>
            <Typography variant="h6" gutterBottom className={classes.infoHeader}>
              Contact
            </Typography>
            <p style={{color: 'white', marginTop: 0}}>03-7451 5283</p>
            <Typography variant="h6" gutterBottom className={classes.infoHeader}>
              Fax
            </Typography>
            <p style={{color: 'white', marginTop: 0}}>03-7451 5283</p>
          </Grid>
          <Hidden xsUp>
            <Grid item xs={5}>four</Grid>
          </Hidden>
        </Grid>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Footer);
