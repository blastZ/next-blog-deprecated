import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';

import posts from '../data/posts';

const RecentPosts = ({ classes }) => {
  return (
    <Grid container direction="column" spacing={16}>
      <Grid item>
        <Typography variant="h6">RECENT POSTS</Typography>
      </Grid>
      {posts.slice(0, 3).map((o, index) => (
        <Grid className={classes.postsContainer} key={o.slug} item container alignItems="center" wrap="nowrap">
          <Grid className={classes.index} item />
          <Grid item>
            <Link href={o.slug}>
              <a>{`${o.date} ${o.title}`}</a>
            </Link>
          </Grid>
          {index !== 2 && <Divider className={classes.divider} />}
        </Grid>
      ))}
    </Grid>
  );
};

const styles = theme => ({
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
  postsContainer: {}
});

export default withStyles(styles)(RecentPosts);
