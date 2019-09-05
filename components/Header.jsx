import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

import { useScrollPosition } from '../hooks/useScrollPosition';

const Header = () => {
  const [hide, setHide] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const show = currPos.y < -(window.innerHeight - 56);
      show ? setHide(false) : setHide(true);
    },
    [hide]
  );

  const classes = useStyles({
    hide
  });

  useEffect(() => {
    console.log(hide);
  }, [hide]);

  return (
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography
            style={{
              color: hide ? '#fff' : '#000'
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
    background: ({ hide }) => (hide ? 'rgba(0,0,0,0)' : 'rgba(255,255,255, 0.98)'),
    boxShadow: ({ hide }) =>
      hide ? 'none' : '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    color: ({ hide }) => (hide ? '#fff' : '#555')
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
