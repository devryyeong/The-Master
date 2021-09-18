import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme)=>({
    main: { 
        padding: '50px 0',
    },
    img: {
        fontWeight: "bold",
        padding: '15px 0',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 0',
    },
    btn: {
        background: 'gray',
        marginRight: '15px',
        padding: '7px 60px',
        textAlign: 'left',
    },
    indexBox: {
        margin: '30px 0',
    },
}));


export default function MasterProfile(){
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Box className={classes.profile}>
                <Card>
                    <CardMedia
                    component="img"
                    height="120"
                    image="images/black&white.jpg"
                    alt="profile photo"
                    />
                </Card>
            </Box>
        </div>
    );
}

