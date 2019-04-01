import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import banner from '../../images/banner/banner.png';
import banner1 from '../../images/banner/banner-rounded-001.svg';
import banner2 from '../../images/banner/banner-rounded-002.svg';

import HeaderMenu from '../HeaderMenu';

const Banner = ({handleDrawerToggle, classes}) => {
  return (
    <div className={classes.banner}>
      {/*<img src={banner1} alt="banner rounded 1"
        style={{
          marginTop: '70px',
          marginLeft: '-77px',
          height: '90%'
        }}
      />
      <img src={banner} alt="main banner"
        style={{
          float: 'right',
          maxWidth: '36%',
          // maxHeight: '75vh',
          marginTop: '115px',
          marginRight: '200px',
        }}
      />
      <img src={banner2} alt="banner rounded 2"
        style={{
          // marginTop: '70px',
          // marginLeft: '-77px',
          // height: '90%'
        }}
      />*/}
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Banner;
