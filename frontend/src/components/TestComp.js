import React, { Fragment } from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    box:{
        width: 30,
        height: 30,
        backgroundColor: '#14ff14',
    },
  }));

export default function TestComp(props) {
    const classes = useStyles();

    function CompleteRow(){
        return(
            <Fragment>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
                <Grid item xs={1}><Paper className={classes.box}/></Grid>
            </Fragment>
        )
    }

    return (
        <div>
            <Grid direction="row-reverse" justify="space-evenly" alignItems="stretch" container spacing={3}>
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
                <CompleteRow />
            </Grid> 
        </div>
    );
}
