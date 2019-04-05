import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';

import content1 from '../images/content/content-001.png';
import content2 from '../images/content/content-002.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    width: '75%',
    margin: 'auto',
  },
  contentContainer: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  image: {
    width: 750,
    maxWidth: '80vw',
  },
});

function Services(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} sm={12} justify="center" alignItems="center">
        <Grid item>
          <img src={content1} alt="content" className={classes.image}/>
        </Grid>
        <Grid item sm>
          <div className={classes.contentContainer}>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 2000 }}
              >
              {props => <div style={props}>
                <Typography component="h3" variant="h4" gutterBottom color="primary">
                  We can give you our best user experience to your system
                </Typography>
              </div>}
            </Spring>
            <Typography variant="h6" color="textSecondary" component="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainer} style={{paddingTop: '30px'}} sm={12} justify="center" alignItems="center" spacing={0}>
        <Grid item sm>
          <div className={classes.contentContainer}>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ duration: 2000 }}
            >
              {props => <div style={props}>
                <Typography component="h3" variant="h4" gutterBottom color="primary">
                  Easy access.
                  Whenever, wherever you want
                </Typography>
              </div>}
            </Spring>
            <Typography variant="h6" color="textSecondary" component="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <img src={content2} alt="content" className={classes.image}/>
        </Grid>
      </Grid>
    </div>
  );
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
