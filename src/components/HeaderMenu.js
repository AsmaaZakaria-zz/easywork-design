import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 'auto',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  link: {
    margin: theme.spacing.unit,
    [theme.breakpoints.up('md', 'lg')]: {
      margin: 15,
    },
    color: 'white',
    fontSize: 'large',
    '&:hover': {
      textDecoration: 'none',
      color: 'darkturquoise'
    }
  },
});

function HeaderMenu(props) {
  const { classes } = props;

  return (
    <Typography className={classes.root}>
      <Link href="/" color="inherit" className={classes.link}>
        Home
      </Link>
      <Link href="/" color="inherit" className={classes.link}>
        About Us
      </Link>
      <Link href="/" color="inherit" className={classes.link}>
        Services
      </Link>
      <Link href="/" color="inherit" className={classes.link}>
        Pricing
      </Link>
      <Link href="/" color="inherit" className={classes.link}>
        Careers
      </Link>
    </Typography>
  );
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);
