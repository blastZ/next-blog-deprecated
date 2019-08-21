import React, { useState, useMemo, useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Category from '../components/Category';
import PageButton from '../components/PageButton';
import posts from '../data/posts';
import categoryList from '../data/category';

const MainPage = ({ classes }) => {
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(0);
  const pageSize = 7;

  const changeCategory = useCallback(category => {
    setCategory(category);
    window.scrollTo(0, 300);
  }, []);

  const showPosts = useMemo(() => {
    return posts
      .filter(o => o.published && ((category !== 'all' && o.tags.includes(category)) || category === 'all'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(page * pageSize, page * pageSize + pageSize);
  }, [posts, category, page, pageSize]);

  return (
    <>
      <Layout>
        <Grid container wrap="nowrap" justify="center">
          <Grid className={classes.left} item>
            <Grid className={classes.posts} item container spacing={8}>
              {showPosts.map(({ id, thumb, title, tags, date, subTitle, slug }) => (
                <Grid className={classes.cardContainer} key={slug} item>
                  <PostCard id={id} data={{ thumb, title, tags, slug, date, subTitle }} changeCategory={changeCategory} />
                </Grid>
              ))}
            </Grid>
            <Divider light />
            <PageButton page={page} pageSize={pageSize} length={showPosts.length} />
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
  left: {
    [theme.breakpoints.up('md')]: {
      width: '75%'
    },
    padding: '0px 32px',
    margin: '48px 0px'
  },
  cardContainer: {
    width: '100%'
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
