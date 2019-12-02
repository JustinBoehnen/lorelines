import clsx from 'clsx';
import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { 
    Drawer, 
    Divider, 
    List, 
    Typography, 
    AppBar, 
    Toolbar, 
    CssBaseline, 
    ListItem, 
    makeStyles, 
    ListItemIcon, 
    ListItemText,
    IconButton,
} from '@material-ui/core'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        overflowX: 'hidden',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
            overflowX: 'hidden',
            width: 50, //theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
            width: 65, //theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawerIcons: {
        fill: theme.palette.drawer.icons,
    },
}));

export default function Navigation(props) {
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.65 32.34" height={30}>
                                <title>icon_hamburger</title><g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <rect class="cls-1" y="25.18" width="35.65" height="7.16" rx="3.58"/>
                                        <rect class="cls-1" y="12.59" width="35.65" height="7.16" rx="3.58"/>
                                        <rect class="cls-1" width="35.65" height="7.16" rx="3.58"/>
                                    </g>
                                </g>
                            </svg>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {props.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.31 35.45" height={32}>
                                <title>icon_chevron</title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M8.65,17.73,20.26,6.11a3.58,3.58,0,1,0-5.07-5.06L1.05,15.19a3.59,3.59,0,0,0,0,5.07L15.19,34.4a3.59,3.59,0,0,0,5.07,0h0a3.57,3.57,0,0,0,0-5.06Z"/>
                                    </g>
                                </g>
                            </svg>
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link to='/account'>
                            <ListItem button key="Account">
                                <ListItemIcon>
                                <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.65 35.21" width={30}>
                                <title>icon_profile</title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <path class="cls-1" d="M13.64,17.38H22A13.64,13.64,0,0,1,35.65,31v0a4.18,4.18,0,0,1-4.18,4.18H4.18A4.18,4.18,0,0,1,0,31v0A13.64,13.64,0,0,1,13.64,17.38Z"/>
                                        <circle class="cls-1" cx="17.82" cy="10.19" r="10.19"/>
                                        </g>
                                    </g>
                                </svg>
                                </ListItemIcon>
                                <ListItemText primary="Account" />
                            </ListItem>
                        </Link>
                        <Link to='/lorelines'>
                            <ListItem button key="Lorelines">
                                <ListItemIcon>
                                <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.91 25.76" width={30}>
                                <title>icon_group</title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <rect class="cls-1" width="11.65" height="11.65" rx="4.18"/>
                                        <rect class="cls-1" x="13.76" width="11.65" height="11.65" rx="4.18"/>
                                        <rect class="cls-1" x="27.26" width="11.65" height="11.65" rx="4.18"/>
                                        <rect class="cls-1" y="14.12" width="11.65" height="11.65" rx="4.18"/>
                                        <rect class="cls-1" x="13.76" y="14.12" width="11.65" height="11.65" rx="4.18"/>
                                        <rect class="cls-1" x="27.26" y="14.12" width="11.65" height="11.65" rx="4.18"/>
                                        </g>
                                    </g>
                                </svg>
                                </ListItemIcon>
                                <ListItemText primary="Lorelines" />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        <Link to='/new'>
                            <ListItem button key="New Custom Entity">
                                <ListItemIcon>
                                    <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.93 44.93" width={30}>
                                        <title>icon_add</title>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <path class="cls-1" d="M41.37,18.9H29.58A3.56,3.56,0,0,1,26,15.35V3.56A3.56,3.56,0,0,0,22.46,0h0A3.56,3.56,0,0,0,18.9,3.56V15.35a3.55,3.55,0,0,1-3.55,3.55H3.56A3.56,3.56,0,0,0,0,22.46H0A3.56,3.56,0,0,0,3.56,26H15.35a3.56,3.56,0,0,1,3.55,3.56V41.37a3.57,3.57,0,0,0,3.56,3.56h0A3.56,3.56,0,0,0,26,41.37V29.58A3.57,3.57,0,0,1,29.58,26H41.37a3.56,3.56,0,0,0,3.56-3.56h0A3.57,3.57,0,0,0,41.37,18.9Z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="New Custom Entity" />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        <Link to='/timeline'>
                            <ListItem button key="Timeline">
                                <ListItemIcon>
                                    <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.26 32.62" width={30}>
                                        <title>icon_timeline</title>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <rect class="cls-1" y="10.49" width="11.65" height="11.65" rx="4.18"/>
                                                <rect class="cls-1" x="23.62" width="11.65" height="11.65" rx="4.18"/>
                                                <rect class="cls-1" x="23.62" y="20.97" width="11.65" height="11.65" rx="4.18"/>
                                                <path class="cls-1" d="M19.38,16.31v-8a1,1,0,0,1,1-1h.81a1,1,0,0,0,1-1v-1a1,1,0,0,0-1-1H19.4a3,3,0,0,0-3,3V13.8a1,1,0,0,1-1,1H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1h1.42a1,1,0,0,1,1,1v6.46a3,3,0,0,0,3,3h1.8a1,1,0,0,0,1-1v-1a1,1,0,0,0-1-1h-.81a1,1,0,0,1-1-1v-8Z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="Timeline" />
                            </ListItem>
                        </Link>
                        <Link to='/directory'>
                            <ListItem button key="Directory">
                                <ListItemIcon>
                                    <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.44 36.94" width={30}>
                                        <title>icon_directory</title>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <rect class="cls-1" width="11.65" height="11.65" rx="4.18"/>
                                                <rect class="cls-1" x="17.79" y="12.65" width="11.65" height="11.65" rx="4.18"/>
                                                <path class="cls-1" d="M15.78,20H7.62a3.3,3.3,0,0,1-3.3-3.3V13.62a.69.69,0,0,1,.7-.69H6.63a.69.69,0,0,1,.69.69v2.46a.9.9,0,0,0,.9.89h7.56a.69.69,0,0,1,.69.7v1.61A.69.69,0,0,1,15.78,20Z"/>
                                                <rect class="cls-1" x="17.79" y="25.29" width="11.65" height="11.65" rx="4.18"/>
                                                <path class="cls-1" d="M15.78,32.62H7.62a3.3,3.3,0,0,1-3.3-3.3V21.94a.69.69,0,0,1,.7-.69H6.63a.69.69,0,0,1,.69.69v6.78a.9.9,0,0,0,.9.9h7.56a.69.69,0,0,1,.69.69v1.61A.69.69,0,0,1,15.78,32.62Z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="Directory" />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        <Link to='/about'>
                            <ListItem button key="About Lorelines">
                                <ListItemIcon>
                                    <svg className={classes.drawerIcons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.01 33.45" height={35}>
                                        <title>icon_question</title>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <circle class="cls-1" cx="9.51" cy="29.48" r="3.97"/>
                                                <path class="cls-1" d="M9.85,0A9.55,9.55,0,0,0,0,8.23,1.18,1.18,0,0,0,1.19,9.55H4.1a1.17,1.17,0,0,0,1.15-.91,4.31,4.31,0,1,1,4.22,5.22h0a2.57,2.57,0,0,0-2.59,2.57v5.39h0A1.19,1.19,0,0,0,8,23h2.85a1.19,1.19,0,0,0,1.19-1.19v-1.7a2,2,0,0,1,1.26-1.86A9.54,9.54,0,0,0,9.85,0Z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="About Lorelines" />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                
                    
        
                </main>
            </div>

        </Router>
    );
}