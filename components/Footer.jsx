import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Footer = ({ classes }) => {
  return (
    <Grid className={classes.container} container alignItems="center" justify="center">
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

const styles = theme => ({
  container: {
    marginTop: 24
  },
  contentContainer: {
    background: '#000',
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
    color: 'hsla(0,0%,100%,.7)',
    margin: 0,
    fontSize: 15
  }
});

export default withStyles(styles)(Footer);
