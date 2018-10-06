import React from "react";
import d from "./Header.css";
import Scrollspy from "react-scrollspy";
import MediaQuery from 'react-responsive';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import Drawer from '@material-ui/core/Drawer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

//localization
import Trigger from './Trigger/Trigger';
import TriggerParent from './Trigger/TriggerParent';


export default class Header extends React.Component {

  state = {
    drawerOpen: false,
  }
  toggleDrawer = () => {
    const drawerOpen = this.state.drawerOpen;
    this.setState({ drawerOpen: !drawerOpen });
    console.log(this.state.drawerOpen);
  }

  render() {
    return (
      <div>

        <AppBar position="fixed" color="primary" elevation={0} root={{ height: '400px' }} className={d.appbar}>
          <Toolbar>
            {/* <Typography variant="title" color="inherit" >
              News
          </Typography> */}
            <MediaQuery minWidth={650}>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
                <Button color="inherit">My Skills</Button>
                <Button color="inherit">About Me</Button>
                <Button color="inherit">My Values</Button>
                <Button color="inherit">Contact Me</Button>
                <Trigger test='test'/>
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={650}>
              <IconButton onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>

            </MediaQuery>
            <CustomDrawer toggleDrawer={this.toggleDrawer} drawerOpen={this.state.drawerOpen} />

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


// class Header extends React.Component {
//   render() {
//     return (
//       <div className={d.navbar}>
//         <ul>
//           <Scrollspy
//             items={["about-me", "skills", "section-3"]}
//             currentClassName="is-current"
//           >
//             <li>
//               <a href="#about-me">About Me</a>
//             </li>
//             <li>
//               <a href="#skills">Skills</a>
//             </li>
//             <li>
//               <a href="#resume">Resume</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </Scrollspy>
//         </ul>
//       </div>
//     );
//   }
// }