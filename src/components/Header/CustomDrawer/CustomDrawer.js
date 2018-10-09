import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import d from "./CustomDrawer.css";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/Code";
import {Person, Assessment, LocalPhone, Language} from '@material-ui/icons'
import ListItemText from "@material-ui/core/ListItemText";
import Scrollspy from "react-scrollspy";
import { Typography } from "@material-ui/core";
import LanguageButtons from './LanguageButtons/LanguageButtons';

const CustomDrawer = props => {
  return (
    <SwipeableDrawer
      disableRestoreFocus={true}
      anchor="left"
      open={props.drawerOpen}
      onClose={props.toggleDrawer}
      onOpen={this.toggleDrawer}
      style={{ position: "fixed" }}
      className={d.drawer}
    >
      <div className={d.drawerHeader}>
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
          <Typography>Menu</Typography>
        </IconButton>
      </div>
      <Divider />
      <div className={d.list}>
        <List>
          <Scrollspy
            items={["about-me", "skills", "section-3"]}
            currentClassName="is-current"
          >
            <ListItem button component="a" href="#skills" onClick={props.toggleDrawer}>
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="My Skills" />
            </ListItem>
            <ListItem button component="a" href="#about-me" onClick={props.toggleDrawer}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItem>
            <ListItem button component="a" href="#contact" onClick={props.toggleDrawer}>
              <ListItemIcon>
                <LocalPhone />
              </ListItemIcon>
              <ListItemText primary="Contact Me" />
            </ListItem>
            <LanguageButtons toggleDrawer={props.toggleDrawer}/>
          </Scrollspy>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default CustomDrawer;
