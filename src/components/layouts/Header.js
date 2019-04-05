import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../images/header/logo.png';
import HeaderMenu from '../headers/HeaderMenu';

const Header = ({handleDrawerToggle, classes}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#252584'}}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="EasyWork logo"/>
          <HeaderMenu />
          <IconButton color="inherit" style={{marginLeft: 'auto'}}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
