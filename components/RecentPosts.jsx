import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';

const RecentPosts = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h6">RECENT POSTS</Typography>
      </Grid>
      {[
        {
          slug: '/posts/http2-best-practices',
          date: '2019/06/05',
          title: 'HTTP2 最佳实践'
        },
        {
          slug: '/posts/ecmascript-standard',
          date: '2019/05/15',
          title: 'ECMAScript 标准'
        },
        {
          slug: '/posts/three-ways-to-remove-array-duplicates',
          date: '2019/03/12',
          title: '数组去重的三种方式'
        }
      ].map((o, index) => (
        <Grid key={o.slug} item container alignItems="center" wrap="nowrap">
          <Grid className={classes.index} item />
          <Grid className={classes.postA} item>
            <Link href={o.slug}>
              <a className={classes.postA}>{`${o.date} ${o.title}`}</a>
            </Link>
          </Grid>
          {index !== 2 && <Divider className={classes.divider} />}
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles({
  index: {
    width: 10,
    height: 10,
    background: '#000',
    marginLeft: 8,
    marginRight: 16,
    borderRadius: '50%'
  },
  divider: {
    maxWidth: 360
  },
  postA: {
    color: 'rgba(0,150,136,1) !important',
    transition: 'transform 300ms ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
});

export default RecentPosts;
