import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

//createTheme 외않되
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = makeStyles((theme)=>({
    appbar:{
        background: 'none',
    },
    title: {
        flexGrow: 1,
    },
    masterbtn: {
        background: 'linear-gradient(45deg, #F79489 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        padding: '0 20px',
        margin: '0 30px',
        fontWeight: "bold",
    },
    link:{
        color: 'inherit',
        textDecoration: 'inherit',
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: deepOrange[200],
        }
    },
});

export default function Header(){

    const classes = useStyles();
    return (
        <div>
        
        <ThemeProvider theme={theme}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <Link to="/" className={classes.link}>
                        <Typography variant="h6" className={classes.title}>
                        LOGO
                        </Typography>
                    </Link>

                    <Button className={classes.masterbtn}>고수가입</Button>

                    <Button>회원가입</Button>

                    <Link to="/findmaster" className={classes.link}>
                        <Button>고수 찾기</Button>
                    </Link>

                    <Button>로그인</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider> 

        </div>
    );
}