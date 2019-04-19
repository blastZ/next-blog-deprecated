import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const PageButton = ({ classes }) => {
  const CustomButton = ({ text }) => (
    <Button className={classes.customButton} color="primary" variant="outlined">
      {text}
    </Button>
  );

  return (
    <Grid className={classes.container} container justify="space-between">
      <CustomButton text="NEWER" />
      <CustomButton text="OLDER" />
    </Grid>
  );
};

const styles = theme => ({
  container: {
    margin: '32px 0px'
  },
  customButton: {
    borderRadius: 1
  }
});

export default withStyles(styles)(PageButton);
