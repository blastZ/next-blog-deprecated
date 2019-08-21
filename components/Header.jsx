import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography
            style={{
              color: '#000'
            }}
            variant="h6"
            color="inherit"
            className={classes.grow}>
            StackBunch
          </Typography>
          <LinkButton
            onClick={() => {
              Router.push('/');
            }}>
            BLOG
          </LinkButton>
          <LinkButton disabled>CASE</LinkButton>
          <LinkButton primary={true} disabled>
            ABOUT
          </LinkButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const LinkButton = ({ children, primary = null, onClick, disabled = false }) => (
  <Button onClick={onClick} color={primary ? 'primary' : 'default'} disabled={disabled}>
    {children}
  </Button>
);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    background: 'rgba(255,255,255,1)',
    opacity: 0.98,
    color: '#555'
  },
  toolBar: {
    [theme.breakpoints.up('xxl')]: {
      width: 1334,
      margin: '0 auto',
      padding: 0
    }
  },
  toolbarButton: {
    marginLeft: -12,
    marginRight: 20
  }
}));

export default Header;
