import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: 100,
    },
    
}));

export default function CategoryCards(){
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea> 
                <MenuBookIcon color="action" fontSize="large"/>
                </CardActionArea>
                <CardContent>
                <Typography gutterBottom component="div"></Typography>
                <Box textAlign="center" m={1}>Lesson</Box>
                </CardContent>
            </Card>
        </div>
    );
}