import React, { useState } from 'react'
import Navigation from './Navigation'
import { Route } from 'react-router-dom'
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

export default function Home() {
    //const [drawerOpen, setDrawerOpen] = useState(false);

    const setDrawer = (isOpen) => {
        //setDrawerOpen(isOpen);
    }

    return (
        <div>
            <Navigation setDrawer={setDrawer} />
            <Box marginLeft='70px'>
                <Route exact path='/app/account' component={() => <h1>Account</h1>} />
                <Route exact path='/app/lorelines' component={() => <h1>Lorelines</h1>} />
                <Route exact path='/app/new' component={() => <h1>New Custom Entity</h1>} />
                <Route exact path='/app/timeline' component={() => <h1>Timeline</h1>} />
                <Route exact path='/app/directory' component={() => <h1>Directory</h1>} />
                <Route exact path='/app/about' component={() => <h1>About</h1>} />
            </Box>
        </div>
    )
}
