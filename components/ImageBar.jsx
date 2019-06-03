import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const ImageBar = ({ slogan = false, title, height = 464, children }) => {
  const classes = useStyles({ height });

  return (
    <Grid className={classes.container} container direction="column" alignItems="center" justify="center" wrap="nowrap">
      <picture>
        <source srcSet="/static/bg.webp" type="image/webp" />
        <source srcSet="/static/bg.jpg" type="image/jpeg" />
        <img className={classes.background} src="/static/bg.jpg" alt="" />
      </picture>
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

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: props => props.height,
    padding: '56px 16px',
    background: '#090a0b',
    position: 'relative'
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: props => props.height,
    objectFit: 'cover'
  },
  slogan: {
    color: '#fff',
    margin: '16px 0px',
    zIndex: 1
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    zIndex: 1
  }
});

export default ImageBar;
