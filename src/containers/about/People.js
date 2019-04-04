import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import AboutHeader from '../../components/AboutHeader';
import Card from '../../components/Card';
import PeopleData from '../../store/People';

import happyIcon from '../../images/icons/happy-face.svg';

// TODO:
// MOVE PEOPLE STYLE HERE

const PeopleCards = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AboutHeader
        icon={happyIcon}
        iconColor="deeppink"
        header="Our important people are listed here"
      />
      <div className={classes.layout}>
          <Grid container spacing={40} style={{marginTop: 20}} justify="center" alignItems="center">
            {PeopleData.map(person => (
              <Grid item key={person} sm={6} md={4} lg={3}>
                <Card
                  classes={classes}
                  image={person.photo}
                  title={person.name}
                  name={person.name}
                  position={person.position}
                />
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  );
}

PeopleCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PeopleCards;
