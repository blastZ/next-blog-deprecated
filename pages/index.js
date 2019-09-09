import React, { useState, useMemo, useCallback, useLayoutEffect } from 'react';
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
  const [show, setShow] = useState(true);
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(0);
  const pageSize = 7;

  const changeCategory = useCallback(category => {
    setCategory(category);
    window.scrollTo(0, 0);
  }, []);

  const showPosts = useMemo(() => {
    return posts
      .filter(o => o.published && ((category !== 'all' && o.tags.includes(category)) || category === 'all'))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(page * pageSize, page * pageSize + pageSize);
  }, [posts, category, page, pageSize]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0
        }}>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto,w_639/v1568044607/blog-assets/bg-2_wud8v2.webp"
            media="(max-width: 639px)"
            type="image/webp"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto,w_1024/v1568044607/blog-assets/bg-2_wud8v2.webp"
            media="(min-width: 640px) and (max-width: 1024px)"
            type="image/webp"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto,w_1440/v1568044607/blog-assets/bg-2_wud8v2.webp"
            media="(min-width: 1025px) and (max-width: 1440px)"
            type="image/webp"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto/v1568044607/blog-assets/bg-2_wud8v2.webp"
            media="(min-width: 1441px)"
            type="image/webp"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto,w_639/v1568044607/blog-assets/bg-2_wud8v2.jpg"
            media="(max-width: 639px)"
            type="image/jpeg"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto,w_1024/v1568044607/blog-assets/bg-2_wud8v2.jpg"
            media="(min-width: 640px) and (max-width: 1024px)"
            type="image/jpeg"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto,w_1440/v1568044607/blog-assets/bg-2_wud8v2.jpg"
            media="(min-width: 1025px) and (max-width: 1440px)"
            type="image/jpeg"
          />
          <source
            srcSet="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto/v1568044607/blog-assets/bg-2_wud8v2.jpg"
            media="(min-width: 1441px)"
            type="image/jpeg"
          />
          <img
            className={classes.background}
            src="https://res.cloudinary.com/stackbunch/image/upload/c_scale,q_auto/v1568044607/blog-assets/bg-2_wud8v2.jpg"
            alt="cover"
          />
        </picture>
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            top: 0,
            background: 'rgba(0,0,0,0.5)'
          }}
        />
      </div>
      <Layout>
        <Grid style={{ marginTop: 64 }} container wrap="nowrap" justify="center">
          <Grid className={classes.left} item container>
            <Grid item container direction="column" spacing={6}>
              {showPosts.map(({ id, thumb, title, tags, date, subTitle, slug }) => (
                <Grid className={classes.cardContainer} key={slug} item>
                  <PostCard id={id} data={{ thumb, title, tags, slug, date, subTitle }} changeCategory={changeCategory} />
                </Grid>
              ))}
            </Grid>
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
      width: '80%'
    },
    padding: '16px 32px 32px 32px',
    margin: '16px 0px',
    minHeight: 400,
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    height: `calc(100vh - 88px - 24px)`,
    zIndex: 10,
    '&::-webkit-scrollbar': {
      width: 0,
      display: 'none'
    }
  },
  cardContainer: {
    width: '100%'
  },
  right: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: '20%'
    },
    padding: '8px 24px'
  },
  background: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center'
  }
});

export default withStyles(styles)(MainPage);
