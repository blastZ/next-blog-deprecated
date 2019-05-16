import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import RecentPost from './RecentPosts';

const AboutMe = ({ classes }) => {
  return (
    <Grid className={classes.container} container>
      {/* <Grid className={classes.recentContainer} item xs={12} md={7}>
        <RecentPost />
      </Grid> */}
      <Grid className={classes.meContainer} item xs={12} md={5} container direction="column" spacing={16}>
        <Grid item>
          <Typography variant="h6">ABOUT ME</Typography>
        </Grid>
        <Grid item container spacing={16}>
          <Grid item xs={3}>
            <img src="/static/avatars.webp" />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">
              Hi, I'm blastz - A Chinese Full-Stack Engineer. From HangZhou, ZheJiang. Have a look at my social media profiles below.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = theme => ({
  container: {
    paddingLeft: 32,
    paddingRight: 32,
    maxWidth: 1170,
    margin: '0 auto'
  },
  recentContainer: {
    paddingTop: 56,
    paddingBottom: 56,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  meContainer: {
    paddingTop: 56,
    paddingBottom: 56
  }
});

export default withStyles(styles)(AboutMe);
