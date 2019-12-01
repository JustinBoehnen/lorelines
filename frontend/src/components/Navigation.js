import React, {Component} from 'react';
import { Drawer, Divider, List, Typography } from '@material-ui/core'

const drawerWidth = 240;

class Navigation extends Component {
    render(){
        return (
            <div display="flex">
                <Drawer width={drawerWidth} flexshrink={0} variant="permanent" anchor="left">
                    <div backgroundcolor="#666" />
                    <Divider />
                    <List style={{flex:1, flexDirection:"column", justifyContent:"space-around"}}>
                        <Typography>one</Typography>
                        <Typography>two</Typography>
                        <Typography>ee</Typography>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default Navigation;
