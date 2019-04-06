import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardMedia, CardContent, Typography, Checkbox } from '@material-ui/core';

import ViewModal from './ViewModal';
import EditModal from './EditModal';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      width: '102%',
      boxShadow: '7px 9px 22px 0px rgba(92,106,255,0.53)',
    }
  },
  cardMedia: {
    paddingTop: '56.25%',
    height: 220,
  },
  cardContent: {
    flexGrow: 1,
    margin: 'auto',
    textAlign: 'center',
  },
  icons: {
    display: 'flex',
    position: 'absolute',
    [theme.breakpoints.only('lg')]: {
      marginLeft: 170,
    },
    // marginLeft: 170,
  }
})

class CardPeople extends Component {
  render() {
    const { classes, person, remove } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={person.photo}
          title={person.title}
        />
        {remove ?
          <Checkbox
            color="primary"
            style={{position: 'absolute'}}
          /> : ''}
        <div className={classes.icons}>
          <ViewModal
            person={person}
          />
          <EditModal
            person={person}
            header="Edit People"
          />
        </div>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {person.name}
          </Typography>
          <Typography>
            {person.position}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

CardPeople.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardPeople);
