import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const isIndex = router.route === '/';
  const classes = useStyles({
    isIndex
  });

  const handleClick = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            StackBunch
          </Typography>
          <LinkButton isIndex={isIndex} onClick={handleClick}>
            BLOG
          </LinkButton>
          <LinkButton isIndex={isIndex} disabled>
            CASE
          </LinkButton>
          <LinkButton isIndex={isIndex} primary={true} disabled>
            ABOUT
          </LinkButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const LinkButton = ({ children, primary = null, onClick, disabled = false, isIndex }) => (
  <Button style={{ color: isIndex ? '#fff' : '' }} onClick={onClick} color={primary ? 'primary' : 'default'} disabled={disabled}>
    {children}
  </Button>
);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    color: ({ isIndex }) => (isIndex ? '#fff' : '#000')
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    paddingTop: ({ isIndex }) => (isIndex ? 16 : ''),
    background: ({ isIndex }) => (isIndex ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,1)'),
    boxShadow: ({ isIndex }) =>
      isIndex ? 'none' : '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    color: ({ isIndex }) => (isIndex ? '#fff' : '#000')
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
