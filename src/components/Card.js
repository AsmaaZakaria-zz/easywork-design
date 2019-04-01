import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const CardPeople = ({ classes, image, title, name, position }) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>
          {position}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardPeople.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default CardPeople;
