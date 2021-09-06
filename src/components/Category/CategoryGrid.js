import React from 'react';
import CategoryCards from './CategoryCards';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '20px 0',
    },
});

export default function CategoryGrid(){
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
            <Grid item xs={3}> 
                <CategoryCards />
            </Grid>

            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
            <Grid item xs={3}>
                <CategoryCards />
            </Grid>
        </Grid>
    );
}