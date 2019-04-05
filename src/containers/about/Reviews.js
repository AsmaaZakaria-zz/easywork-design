import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/style.css";

import AboutHeader from '../../components/headers/AboutHeader';
import ReviewCard from '../../components/ReviewCard';
import ClientReview from '../../store/Clients';

import heartIcon from '../../images/icons/heart.svg';

// TODO:
// MAKE CARESOUL RESPONSIVE

const styles = theme => ({
  carouselContainer: {
    width: '70%',
    margin: '20px 0 0 200px',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 0 0 60px',
    },
  }
});

const Reviews = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AboutHeader
        icon={heartIcon}
        iconColor="red"
        header="What other people say about our services"
      />
      <div className={classes.carouselContainer}>
      <Carousel centerMode centerSlidePercentage={45} emulateTouch showThumbs={false} showStatus={false} style={{height: '300px'}}>
        {ClientReview.map(client => {
          return (
            <ReviewCard review={client} />
          )
        })}
      </Carousel>
      </div>
    </div>
  );
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews);
