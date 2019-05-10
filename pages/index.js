import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Category from '../components/Category';
import PageButton from '../components/PageButton';
import posts from '../data/posts';

const MainPage = ({ data = [], classes }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState('all');

  // set category list
  useEffect(() => {
    const list = [
      {
        name: 'all',
        num: 5
      },
      {
        name: 'react',
        num: 1
      },
      {
        name: 'node',
        num: 2
      },
      {
        name: 'javascript',
        num: 4
      },
      {
        name: 'd3',
        num: 2
      }
    ];

    setCategoryList(list);
  }, []);

  // change category
  // useEffect(() => {
  //   if (category === 'all') {
  //     setPosts([]);
  //   } else {
  //     setPosts([]);
  //   }
  // }, [category]);

  const changeCategory = category => {};

  return (
    <>
      <Layout>
        <Grid className={classes.container} container wrap="nowrap">
          <Grid className={classes.left} item>
            <Grid className={classes.posts} item>
              {posts.slice(0, 7).map(({ id, thumb, title, tags, date, subTitle, slug }) => (
                <PostCard key={slug} id={id} data={{ thumb, title, tags, slug, date, subTitle }} changeCategory={changeCategory} />
              ))}
            </Grid>
            <Divider light />
            <PageButton />
          </Grid>
          <Grid className={classes.right} item>
            <Category changeCategory={changeCategory} categoryList={categoryList} />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

const styles = theme => ({
  container: {
    justifyContent: 'center'
  },
  left: {
    [theme.breakpoints.up('lg')]: {
      width: '75%'
    },
    padding: '0px 32px'
  },
  posts: {
    minHeight: 400
  },
  right: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: '25%'
    },
    padding: '24px 24px'
  }
});

export default withStyles(styles)(MainPage);
