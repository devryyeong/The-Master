import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    mininav: { 
        //padding: '0 20px',
    },
    text: {
        flexGrow: 1,
        fontWeight: "bold",
        padding: '15px 0',
    },

}));

export default function SearchCategory(){
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.text}>hello~</Typography>
        </div>
    );
}
