import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Main = ({ children, classes }) => {
  return (
    <div
      className={classes.container}
      style={{
        margin: '0 auto',
        paddingTop: 8,
      }}
    >
      {children}
    </div>
  );
};

const styles = theme => ({
  container: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 650,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: 750,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      maxWidth: 970,
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1170,
    },
  },
});

export default withStyles(styles)(Main);
