import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, CssBaseline } from '@material-ui/core';

import Header from './Header';
import Drawer from './Drawer';
import Banner from './Banner';

import Services from '../../containers/Services';
import About from '../../screen/About';

const drawerWidth = '60%';

const styles = theme => ({
  root: {
    //
  },
  drawer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    marginTop: '25px',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
  },
  banner: {
    height: '600px',
    backgroundColor: '#252584',
    display: 'flex',
  }
});

class Layout extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={this.handleDrawerToggle}
          classes={classes}
        />
        <Drawer
          handleDrawerToggle={this.handleDrawerToggle}
          classes={classes}
          mobileOpen={this.state.mobileOpen}
          theme={theme}
        />
        <main className={classes.content}>
          <Banner classes={classes}/>
          <Services />
          <About />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
