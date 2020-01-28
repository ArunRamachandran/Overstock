import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import './page-layout.less';

export default class Header extends Component {

    render() {
        const classes = makeStyles(theme => ({
            root: {
                flexGrow: 1,
              },
              menuButton: {
                marginRight: theme.spacing(2),
              },
              title: {
                flexGrow: 1,
              }
          }));
        return (
            <div className={classes.root}>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                React app
                            </Typography>
                            <Button color="inherit" style={{marginLeft: 'auto'}}>Favouites</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}