import React from 'react';
import Layout from '../components/Layout';
import { withStyles } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react';

import Highlight from './Highlight';

const Title = props => {
  return (
    <h1
      style={{
        display: 'none'
      }}>
      {props.children}
    </h1>
  );
};

const Pre = props => {
  return (
    <div
      style={{
        backgroundColor: '#2f1d2e',
        padding: 24,
        paddingLeft: 32,
        borderLeft: '5px solid #38bb6c',
        overflowX: 'auto',
        margin: '32px 0px'
      }}>
      {props.children}
    </div>
  );
};

const Code = props => {
  return (
    <code
      style={{
        padding: 2,
        fontFamily: 'roboto',
        color: props.className ? '#06b6ef' : '#ff5700'
      }}>
      {props.children}
    </code>
  );
};

const components = {
  pre: Pre,
  code: Highlight,
  inlineCode: Code,
  h1: Title
};

const Post = ({ frontMatter, classes, children }) => {
  if (!frontMatter) return <div>No Such File</div>;

  const { title, date, slug } = frontMatter;

  return (
    <MDXProvider components={components}>
      <Layout>
        <div className={classes.container}>
          <h1 className={classes.title}>{title}</h1>
          <h4 className={classes.subTitle}>
            <span className={classes.date}>{`${date} - `}</span>
            <a className={classes.editLink} href={`https://github.com/blastZ/next-blog/blob/master/pages/posts${slug}.mdx`}>
              EDIT THIS POST ON GITHUB
            </a>
          </h4>
          <div className={classes.content}>{children}</div>
        </div>
      </Layout>
    </MDXProvider>
  );
};

const styles = theme => ({
  container: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 18
    },
    [theme.breakpoints.up('lg')]: {
      width: '66.66666667%',
      marginLeft: '16.66666667%'
    },
    marginTop: 40
  },
  title: {
    textAlign: 'center'
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 20
  },
  date: {
    color: '#777'
  },
  editLink: {
    cursor: 'pointer',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
      color: '#ff5700'
    }
  },
  content: {
    marginTop: 64,
    wordWrap: 'break-word'
  }
});

export default withStyles(styles)(Post);
