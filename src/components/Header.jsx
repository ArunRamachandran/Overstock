import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends Component {

    render() {
        const classes = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
            menuButton: {
              marginRight: theme.spacing(2),
            },
            toolbar: {
                minHeight: 128,
                alignItems: 'flex-start',
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(2),
              }
          }));
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar} variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Overstock - React app
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}