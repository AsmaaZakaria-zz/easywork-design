import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Paper, FormControl, InputLabel, Input, Button, Select, MenuItem } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: 20,
    width: '75%',
    marginLeft: 150,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%',
    margin: 'auto',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    float: 'right',
    width: '33%',
  },
});

function ContactForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name="Name" type="text" id="Name" autoComplete="current-Name" />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>

          <FormControl style={{width: '100%'}}>
            <InputLabel htmlFor="subject">Subject</InputLabel>
            <Select>
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Work</MenuItem>
              <MenuItem value={20}>Question</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="msg" name="msg" autoFocus multiline={true}/>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </Paper>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContactForm);
