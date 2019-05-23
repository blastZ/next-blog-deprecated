import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined';
import Link from '@material-ui/core/Link';
import NextLink from 'next/link';

const PostCard = ({ classes, data: { title, date, tags, slug, subTitle, thumb }, changeCategory }) => {
  return (
    <Card elevation={0} className={classes.card}>
      <NextLink prefetch href={slug}>
        <img src={thumb} className={classes.cardActionArea} />
      </NextLink>
      <CardContent className={classes.cardContent}>
        <NextLink href={slug}>
          <Link className={classes.title} variant="h5">
            {title}
          </Link>
        </NextLink>
        <Grid className={classes.infoContainer} container justify="space-between">
          <Grid item>
            IN{' '}
            <Link onClick={() => changeCategory(tags[0] || '')} className={classes.category}>
              {tags[0].toUpperCase() || ''}
            </Link>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <CalendarIcon style={{ width: '0.6em', marginRight: 8 }} />
              {date}
            </Grid>
          </Grid>
        </Grid>
        <Typography className={classes.subTitle} component="p">
          {subTitle}
        </Typography>
        <NextLink href={slug}>
          <Button color="primary" className={classes.readButton} variant="outlined">
            Read
          </Button>
        </NextLink>
      </CardContent>
    </Card>
  );
};

const styles = theme => ({
  subTitle: {
    fontWeight: 300
  },
  card: {
    background: 'none',
    display: 'flex',
    width: '100%',
    marginTop: 40,
    marginBottom: 60,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.between('md', 'xl')]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.up('xl')]: {
      flexDirection: 'row'
    }
  },
  cardContent: {
    padding: 4,
    paddingTop: 0,
    [theme.breakpoints.only('lg')]: {
      width: '100%',
      paddingRight: 2
    },
    [theme.breakpoints.up('xl')]: {
      width: '66.6666666666%'
    }
  },
  cardActionArea: {
    cursor: 'pointer',
    transition: 'opacity 0.6s ease',
    '&:hover': {
      opacity: 0.8
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: '16px 0px'
    },
    [theme.breakpoints.between('md', 'xl')]: {
      width: '100%',
      margin: '16px 0'
    },
    [theme.breakpoints.up('xl')]: {
      width: '33.333333333%',
      maxHeight: 180,
      margin: '0 16px'
    }
  },
  readButton: {
    marginTop: 12,
    float: 'right',
    borderRadius: '1px'
  },
  title: {
    color: '#555555',
    cursor: 'pointer',
    textUnderlinePosition: 'under',
    '&:hover': {
      color: '#009688 !important'
    }
  },
  category: {
    cursor: 'pointer',
    color: '#009688',
    marginLeft: 4,
    '&:hover': {
      color: '#009688 !important'
    }
  },
  infoContainer: {
    fontSize: '0.8em',
    padding: '8px 0px',
    color: '#999999'
  }
});

export default withStyles(styles)(PostCard);
