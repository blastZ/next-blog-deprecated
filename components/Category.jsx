import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Category = ({ classes, categoryList, changeCategory }) => {
  return (
    <List component="nav">
      {categoryList.map((o, index) => (
        <ListItem onClick={() => changeCategory(o.name)} key={o.name} button>
          <ListItemText
            classes={{
              primary: classes.listItemText
            }}
            primary={`${o.name} (${o.num})`}
          />
        </ListItem>
      ))}
    </List>
  );
};

const styles = theme => ({
  listItemText: {
    color: '#fff'
  }
});

export default withStyles(styles)(Category);
