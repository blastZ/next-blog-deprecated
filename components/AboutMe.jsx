import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const AboutMe = ({ classes }) => {
  return (
    <Grid className={classes.container} container>
      <Grid item xs={12} md={7}>
        haha
      </Grid>
      <Grid item xs={12} md={5} container direction="column" spacing={8}>
        <Grid item>
          <Typography variant="h6">ABOUT ME</Typography>
        </Grid>
        <Grid item container spacing={16}>
          <Grid item xs={3}>
            <img src="/static/avatars.jpg" />
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

const styles = () => ({
  container: {
    padding: '56px 32px',
    maxWidth: 1170,
    margin: '0 auto'
  }
});

export default withStyles(styles)(AboutMe);
