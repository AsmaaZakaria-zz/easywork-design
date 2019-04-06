import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core';

const drawerWidth = '60%';

const styles = theme => ({
  drawer: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    marginTop: '25px',
  },
  drawerPaper: {
    width: '800%',
  },
});

const AppDrawer = ({ classes, theme, mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Home', 'About Us', 'Pricing', 'Careers'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{paper: classes.drawerPapers}}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
