import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

const categories = [
  {
    name: 'all',
    num: 3
  },
  {
    name: 'tcp/ip',
    num: 2
  },
  {
    name: 'linux',
    num: 2
  },
  {
    name: 'javascript',
    num: 1
  }
];

export default ({ open, onClose, changeCategory }) => {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        paper: classes.paper
      }}
      anchor="right"
      open={open}
      onClose={onClose}>
      <List>
        {categories.map((category, index) => (
          <ListItem onClick={changeCategory(category.name)} button key={category.name}>
            <ListItemText className={classes.listItemText} primary={`${category.name}(${category.num})`} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles(theme => ({
  listItemText: {
    color: '#009688',
    textAlign: 'center'
  },
  paper: {
    minWidth: 200
  }
}));
