import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRouter } from 'next/router';

import theme from '../src/theme';
import '../css/index.css';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Stack Bunch</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

const Container = props => {
  const router = useRouter();
  const isIndex = router.route === '/';
  const classes = useStyles({ isIndex });

  return <div>{props.children}</div>;
};

const useStyles = makeStyles({
  '@global': {
    html: {
      overflow: ({ isIndex }) => (isIndex ? 'hidden' : 'auto')
    }
  }
});

export default MyApp;
