import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core';

const styles = theme => ({
  card: {
    width: '85%',
    borderRadius: 15
  },
  avatar: {
    width: 60,
    height: 60,
  },
  cardHeader: {
    textAlign: 'left',
    fontSize: 'large',
  }
});

const ReviewCard = ({classes, review}) => {
  return (
    <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar src={review.photo} aria-label="Recipe" className={classes.avatar} />}
            title={review.name}
            subheader={review.position}
            className={classes.cardHeader}
          />
          <CardContent>
            <Typography component="p">
              "{review.comment}"
            </Typography>
          </CardContent>
        </Card>
    </div>
  );
}

ReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewCard);
