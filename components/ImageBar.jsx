import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const ImageBar = ({ classes, slogan = false, title, height = 464, children }) => {
  return (
    <Grid className={classes.container} style={{ height }} container direction="column" alignItems="center" justify="center" wrap="nowrap">
      {slogan ? <Slogan className={classes.slogan} /> : null}
      <Title className={classes.title} text={title} />
      {children}
    </Grid>
  );
};

const Slogan = ({ className }) => (
  <Typography className={className} variant="h5">
    {'< Web ❤ />'}
  </Typography>
);

const Title = ({ text, className }) => (
  <Typography className={className} variant="h5">
    {text}
  </Typography>
);

const styles = () => ({
  container: {
    width: '100%',
    padding: '56px 16px',
    background: '#090a0b no-repeat 50%',
    backgroundImage: `url('/static/bg.webp')`
  },
  slogan: {
    color: '#fff',
    margin: '16px 0px'
  },
  title: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default withStyles(styles)(ImageBar);
