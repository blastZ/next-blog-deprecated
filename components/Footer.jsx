import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ImageBar from './ImageBar';

const Footer = ({ classes }) => {
  return (
    <Grid className={classes.container} container alignItems="center" justify="center">
      <ImageBar
        content={'Never miss an article from stack-bunch.'}
        styles={{
          height: 308
        }}>
        <Subscribe classes={classes} />
      </ImageBar>

      <Grid className={classes.contentContainer} container alignItems="center" justify="center">
        <Grid className={classes.content} container alignItems="center" justify="flex-start">
          <Typography className={classes.owner} variant="subtitle2" gutterBottom>
            © 2018 blastz, forever.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Subscribe = ({ classes }) => {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Grid className={classes.emailContainer} item>
        <TextField
          fullWidth
          id="outlined-email-input"
          label="Email"
          InputLabelProps={{
            classes: {
              root: classes.emailInputLabel,
              focused: classes.emailInputLabel
            }
          }}
          InputProps={{
            classes: {
              root: classes.emailInputInner,
              notchedOutline: classes.emailInputInnerBorder
            }
          }}
          className={classes.emailInput}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button className={classes.subscribButton} variant="outlined" color="primary">
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  container: {
    marginTop: 24
  },
  contentContainer: {
    background: '#333',
    padding: '24px 8px'
  },
  content: {
    [theme.breakpoints.down('md')]: {
      width: 650
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: 750
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: 970
    },
    [theme.breakpoints.up('xl')]: {
      width: 1170
    }
  },
  owner: {
    color: '#ccc',
    margin: 0,
    fontSize: 15
  },
  emailContainer: {
    width: '100%',
    maxWidth: 300
  },
  emailInput: {
    margin: '40px 0px 24px 0px'
  },
  emailInputInner: {
    color: 'white'
  },
  emailInputInnerBorder: {
    borderColor: 'white !important'
  },
  emailInputLabel: {
    color: 'white !important'
  },
  subscribButton: {
    marginTop: 16,
    padding: '10px 32px',
    color: 'white',
    borderColor: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
  }
});

export default withStyles(styles)(Footer);
