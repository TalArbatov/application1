import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import d from './CustomDrawer.css';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Code';
import ListItemText from '@material-ui/core/ListItemText';
import Scrollspy from "react-scrollspy";

const CustomDrawer = props => {
  return (
    <SwipeableDrawer
    disableRestoreFocus={true}
      anchor='left'
      open={props.drawerOpen}
      onClose={props.toggleDrawer}
      onOpen={this.toggleDrawer}
      style={{position:'fixed'}}
      className={d.drawer}
    >

      <div className={d.drawerHeader}>
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={d.list}>
        <List>
          
          <Scrollspy
            items={["about-me", "skills", "section-3"]}
            currentClassName="is-current"
          >
              <ListItem button component="a" href="#skills">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="My Skills" />
              </ListItem>
            <ListItem button component="a" href="#about-me">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItem>
          </Scrollspy>
        </List>

      </div>


    </SwipeableDrawer>
  );
};

export default CustomDrawer;