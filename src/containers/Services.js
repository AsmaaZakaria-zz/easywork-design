import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';

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
  image: {
    width: 750,
    maxWidth: '75vw',
  },
});

function Services(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} sm={12}>
        <Grid item>
          <img src={content1} alt="content" className={classes.image}/>
        </Grid>
        <Grid item sm>
          <div style={{paddingTop: '100px'}}>
            <Typography component="h3" variant="h4" gutterBottom color="primary">
              We can give you our best user experience to your system
            </Typography>
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
      <Grid container className={classes.gridContainer} style={{paddingTop: '30px'}}>
        <Grid item sm>
          <div style={{paddingTop: '75px'}}>
            <Typography component="h3" variant="h4" gutterBottom color="primary">
              Easy access.
              Whenever, wherever you want
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged
            </Typography>
          </div>
        </Grid>
        <Grid item sm>
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
