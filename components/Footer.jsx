import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import GithubIcon from './icons/Github';

const Footer = ({ classes }) => {
  return (
    <Grid className={classes.container} container alignItems="center" justify="center">
      <Grid className={classes.contentContainer} container alignItems="center" justify="center">
        <Grid className={classes.links} container alignItems="center" justify="center">
          {/* <Typography className={classes.owner} variant="subtitle2" gutterBottom>
            © 2018 blastz, forever.
          </Typography> */}
          <a style={{ display: 'flex' }} href="https://github.com/blastZ" target="_blank">
            <GithubIcon />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  container: {},
  contentContainer: {
    background: '#000',
    padding: '24px 8px'
  },
  links: {
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
  },
  button: {
    color: 'white',
    fontSize: 15,
    visibility: 'hidden',
    background: 'rgba(255,255,255,0.1) !important'
  }
});

export default withStyles(styles)(Footer);
